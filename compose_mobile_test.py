import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Load the vercel visakhapatnam master
src_p = 'C:/Users/surya/.gemini/antigravity-ide/brain/1bc39c91-e9ba-46e3-9c6f-447b5450f46c/scratch/vercel/dashboard-visakhapatnam.jpg'
src = Image.open(src_p).convert('RGB')
W_src, H_src = src.size # 1024, 1024

# First, remove the Gemini watermark from src (bottom right corner around (920, 920) to (980, 980))
src_np = np.array(src)
mask = np.zeros((H_src, W_src), dtype=np.uint8)
cv2.rectangle(mask, (900, 900), (990, 990), 255, -1)
# Refine mask for white star
crop_star = src_np[900:990, 900:990]
gray = cv2.cvtColor(crop_star, cv2.COLOR_RGB2GRAY)
star_mask = (gray > 175).astype(np.uint8) * 255
star_mask = cv2.dilate(star_mask, np.ones((5, 5), np.uint8), iterations=2)
mask[900:990, 900:990] = star_mask

clean_src_np = cv2.inpaint(src_np, mask, 7, cv2.INPAINT_TELEA)
clean_src = Image.fromarray(clean_src_np)

# Target 9:16 mobile canvas: 768 x 1376
tw, th = 768, 1376

# We want the main image to occupy the central focal area
# If we scale clean_src so width is 768:
scaled_h = 768
scaled = clean_src.resize((tw, scaled_h), Image.Resampling.LANCZOS)

# Create high-end canvas
canvas = Image.new('RGB', (tw, th))

# Background: blurred atmospheric extension of the image to give seamless ambient depth
bg_full = clean_src.resize((tw, th), Image.Resampling.LANCZOS)
bg_full = bg_full.filter(ImageFilter.GaussianBlur(radius=25))
canvas.paste(bg_full, (0, 0))

# Now blend the scaled image in the center (y_pos)
y_pos = (th - scaled_h) // 2 # 304

# Create a smooth vertical blend mask so edges fade seamlessly into the atmospheric ambient
# Top edge and bottom edge fade
mask_blend = Image.new('L', (tw, scaled_h), 255)
draw_mask = ImageDraw.Draw(mask_blend)
for y in range(80):
    alpha = int(255 * (y / 80.0))
    draw_mask.line([(0, y), (tw, y)], fill=alpha)
    draw_mask.line([(0, scaled_h - 1 - y), (tw, scaled_h - 1 - y)], fill=alpha)

canvas.paste(scaled, (0, y_pos), mask_blend)

# Add subtle dark gradient overlay at top (0-160px for status/navbar) and bottom (1200-1376 for call buttons)
overlay = Image.new('RGBA', (tw, th), (0, 0, 0, 0))
draw_over = ImageDraw.Draw(overlay)
for y in range(160):
    a = int(140 * (1.0 - y / 160.0))
    draw_over.line([(0, y), (tw, y)], fill=(0, 0, 0, a))

for y in range(180):
    a = int(160 * (y / 180.0))
    draw_over.line([(0, th - 180 + y), (tw, th - 180 + y)], fill=(0, 0, 0, a))

canvas = Image.alpha_composite(canvas.convert('RGBA'), overlay).convert('RGB')

out_p = 'C:/Users/surya/.gemini/antigravity-ide/brain/1bc39c91-e9ba-46e3-9c6f-447b5450f46c/scratch/test_composed_vizag_916.png'
canvas.save(out_p, 'PNG')
print('Saved', out_p)
