import os
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFilter

vercel_dir = 'C:/Users/surya/.gemini/antigravity-ide/brain/1bc39c91-e9ba-46e3-9c6f-447b5450f46c/scratch/vercel'
dst_dir = 'public/images/dashboard'
dview_logo_p = 'public/images/d-view-logo.png'
dview_emblem_p = 'public/images/d-view-emblem.png'

os.makedirs(dst_dir, exist_ok=True)

# Load official D-VIEW emblem for branding placement
emblem_img = Image.open(dview_emblem_p).convert('RGBA')

cities_config = [
    {
        'id': 'visakhapatnam',
        'src': 'dashboard-visakhapatnam.jpg',
        'dst_sq': 'dashboard-visakhapatnam.jpg',
        'dst_mob': 'dashboard-visakhapatnam-9x16.jpg',
        'watermark_box': (890, 890, 990, 990),
        'replace_logo': None
    },
    {
        'id': 'rajahmundry',
        'src': 'dashboard-rajahmundry.jpg',
        'dst_sq': 'dashboard-rajahmundry.jpg',
        'dst_mob': 'dashboard-rajahmundry-9x16.jpg',
        'watermark_box': (890, 890, 990, 990),
        # Replace the foreign 'SG' logo (around x=630..750, y=280..370) with D-VIEW emblem!
        'replace_logo': {
            'box': (625, 275, 755, 365),
            'target_center': (690, 315),
            'size': (65, 65)
        }
    },
    {
        'id': 'vijayawada',
        'src': 'dashboard-vijayawada.jpg',
        'dst_sq': 'dashboard-vijayawada.jpg',
        'dst_mob': 'dashboard-vijayawada-9x16.jpg',
        'watermark_box': (890, 890, 990, 990),
        'replace_logo': None
    },
    {
        'id': 'guntur',
        'src': 'dashboard-guntur.jpg',
        'dst_sq': 'dashboard-guntur.jpg',
        'dst_mob': 'dashboard-guntur-9x16.jpg',
        'watermark_box': (890, 890, 990, 990),
        'replace_logo': None
    },
    {
        'id': 'kakinada',
        'src': 'dashboard-kakinada.jpg',
        'dst_sq': 'dashboard-kakinada.jpg',
        'dst_mob': 'dashboard-kakinada-9x16.jpg',
        'watermark_box': (890, 890, 990, 990),
        'replace_logo': None
    },
    {
        'id': 'nellore',
        'src': 'dashboard-nellore.jpg',
        'dst_sq': 'dashboard-nellore.jpg',
        'dst_mob': 'dashboard-nellore-9x16.jpg',
        'watermark_box': (890, 890, 990, 990),
        'replace_logo': None
    },
    {
        'id': 'ongole',
        'src': 'ongole-city-poster.jpg', # Uses the poster with full features!
        'dst_sq': 'dashboard-ongole.jpg',
        'dst_mob': 'dashboard-ongole-9x16.jpg',
        'watermark_box': (890, 890, 990, 990),
        'replace_logo': None
    }
]

print('Processing 7 cities...')

for conf in cities_config:
    cid = conf['id']
    src_path = os.path.join(vercel_dir, conf['src'])
    im = Image.open(src_path).convert('RGB')
    arr = np.array(im)
    H, W = arr.shape[:2]
    
    # 1. Inpaint Gemini watermark in bottom right corner
    wb = conf['watermark_box']
    mask = np.zeros((H, W), dtype=np.uint8)
    
    crop_wm = arr[wb[1]:wb[3], wb[0]:wb[2]]
    gray_wm = cv2.cvtColor(crop_wm, cv2.COLOR_RGB2GRAY)
    # The sparkle is bright white/light
    star_mask = (gray_wm > 165).astype(np.uint8) * 255
    star_mask = cv2.dilate(star_mask, np.ones((7, 7), np.uint8), iterations=2)
    mask[wb[1]:wb[3], wb[0]:wb[2]] = star_mask
    
    # Also inpaint logo if specified
    if conf['replace_logo']:
        lb = conf['replace_logo']['box']
        mask[lb[1]:lb[3], lb[0]:lb[2]] = 255
        
    cleaned_arr = cv2.inpaint(arr, mask, 7, cv2.INPAINT_TELEA)
    clean_im = Image.fromarray(cleaned_arr)
    
    # If replace_logo, paste D-VIEW emblem in that spot
    if conf['replace_logo']:
        rinfo = conf['replace_logo']
        cx, cy = rinfo['target_center']
        ew, eh = rinfo['size']
        resized_emblem = emblem_img.resize((ew, eh), Image.Resampling.LANCZOS)
        clean_im.paste(resized_emblem, (cx - ew // 2, cy - eh // 2), resized_emblem)
    
    # SAVE SQUARE (DESKTOP) IMAGE
    sq_path = os.path.join(dst_dir, conf['dst_sq'])
    clean_im.save(sq_path, 'JPEG', quality=95, optimize=True)
    if cid == 'ongole':
        # Also save to ongole-city-poster.jpg
        clean_im.save(os.path.join(dst_dir, 'ongole-city-poster.jpg'), 'JPEG', quality=95, optimize=True)
    print(f'Saved square: {sq_path}')
    
    # CREATE & SAVE 9:16 (MOBILE) IMAGE
    # Mobile canvas: 768 x 1376
    tw, th = 768, 1376
    mob_canvas = Image.new('RGB', (tw, th))
    
    # Atmospheric background for top and bottom extension
    bg_full = clean_im.resize((tw, th), Image.Resampling.LANCZOS)
    bg_full = bg_full.filter(ImageFilter.GaussianBlur(radius=28))
    mob_canvas.paste(bg_full, (0, 0))
    
    # Scale clean_im to 768 width
    scaled_h = 768
    scaled_im = clean_im.resize((tw, scaled_h), Image.Resampling.LANCZOS)
    y_pos = (th - scaled_h) // 2 # 304
    
    # Smooth vertical blend mask for top & bottom 70px
    mask_blend = Image.new('L', (tw, scaled_h), 255)
    draw_mb = ImageDraw.Draw(mask_blend)
    for y in range(70):
        a = int(255 * (y / 70.0))
        draw_mb.line([(0, y), (tw, y)], fill=a)
        draw_mb.line([(0, scaled_h - 1 - y), (tw, scaled_h - 1 - y)], fill=a)
        
    mob_canvas.paste(scaled_im, (0, y_pos), mask_blend)
    
    # Subtle top & bottom dark vignette so mobile UI buttons & status bar have crisp contrast
    overlay = Image.new('RGBA', (tw, th), (0, 0, 0, 0))
    draw_ov = ImageDraw.Draw(overlay)
    for y in range(150):
        a = int(130 * (1.0 - y / 150.0))
        draw_ov.line([(0, y), (tw, y)], fill=(0, 0, 0, a))
    for y in range(160):
        a = int(140 * (y / 160.0))
        draw_ov.line([(0, th - 160 + y), (tw, th - 160 + y)], fill=(0, 0, 0, a))
        
    mob_canvas = Image.alpha_composite(mob_canvas.convert('RGBA'), overlay).convert('RGB')
    
    mob_path = os.path.join(dst_dir, conf['dst_mob'])
    mob_canvas.save(mob_path, 'JPEG', quality=95, optimize=True)
    print(f'Saved mobile 9:16: {mob_path}')

print('All 7 cities updated successfully!')
