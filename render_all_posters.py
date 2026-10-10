import os, cv2, numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

cities_config = [
    {
        'slug': 'visakhapatnam',
        'base': 'public/images/cities/hero-visakhapatnam-novotel.jpg',
        'out': 'public/images/cities/hero-visakhapatnam.jpg',
        'city': 'VISAKHAPATNAM',
        'landmarks': ['THE BEAUTY OF R.K. BEACH &', 'KAILASAGIRI.']
    },
    {
        'slug': 'rajahmundry',
        'base': 'public/images/cities/hero-rajahmundry-sunset.jpg',
        'out': 'public/images/cities/hero-rajahmundry.jpg',
        'city': 'RAJAHMUNDRY',
        'landmarks': ['THE BEAUTY OF GODAVARI', 'ARCH BRIDGE.']
    },
    {
        'slug': 'vijayawada',
        'base': 'public/images/cities/clean_base_vijayawada.jpg',
        'out': 'public/images/cities/hero-vijayawada.jpg',
        'city': 'VIJAYAWADA',
        'landmarks': ['THE BEAUTY OF PRAKASAM BARRAGE', '& INDRAKILADRI.']
    },
    {
        'slug': 'guntur',
        'base': 'public/images/cities/clean_base_guntur.jpg',
        'out': 'public/images/cities/hero-guntur.jpg',
        'city': 'GUNTUR & AMARAVATI',
        'landmarks': ['THE BEAUTY OF KONDAVEEDU', '& BUDDHA STATUE.']
    },
    {
        'slug': 'kakinada',
        'base': 'public/images/cities/clean_base_kakinada.jpg',
        'out': 'public/images/cities/hero-kakinada.jpg',
        'city': 'KAKINADA',
        'landmarks': ['THE BEAUTY OF HOPE ISLAND', '& CORINGA CANOPY.']
    },
    {
        'slug': 'nellore',
        'base': 'public/images/cities/clean_base_nellore.jpg',
        'out': 'public/images/cities/hero-nellore.jpg',
        'city': 'NELLORE',
        'landmarks': ['THE BEAUTY OF PENNA RIVER', '& MYPADU BEACH.']
    },
    {
        'slug': 'ongole',
        'base': 'public/images/cities/clean_base_ongole.jpg',
        'out': 'public/images/cities/hero-ongole.jpg',
        'city': 'ONGOLE',
        'landmarks': ['THE BEAUTY OF VODAREVU', '& KOTHAPATNAM COAST.']
    }
]

def render_city_poster(cfg):
    base = Image.open(cfg['base']).convert('RGBA')
    W_orig, H_orig = base.size
    scale = 2
    base_2x = base.resize((W_orig * scale, H_orig * scale), Image.LANCZOS)
    W, H = base_2x.size
    
    f_badge = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 20 * scale)
    f_green = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 38 * scale)
    f_mid   = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 36 * scale)
    f_lmk   = ImageFont.truetype('C:/Windows/Fonts/segoeuib.ttf', 35 * scale)
    
    cx = 740 * scale
    
    l1 = 'BUILDING SAFER SPACES, TOGETHER'
    l2 = 'PREMIUM INVISIBLE GRILLS IN'
    l3_city = f"{cfg['city']}: "
    l3_exp  = 'EXPERIENCE'
    
    bb_c = f_mid.getbbox(l3_city)
    bb_e = f_mid.getbbox(l3_exp)
    wc = bb_c[2] - bb_c[0]
    we = bb_e[2] - bb_e[0]
    tot_w3 = wc + we
    start_x3 = cx - tot_w3 // 2
    
    # 100% theme matching colors
    c_green_top = (124, 255, 58)  # #7CFF3A (Electric Green)
    c_green_bot = (22, 163, 74)   # #16A34A (Vibrant Emerald)
    stroke_green = (15, 75, 30, 220)
    
    c_gold_top = (254, 240, 138)  # #FEF08A (Champagne Gold)
    c_gold_bot = (245, 158, 11)   # #F59E0B (Amber Gold)
    stroke_gold = (146, 64, 14, 220)
    
    c_white_top = (255, 255, 255) # Diamond White
    c_white_bot = (240, 245, 250)
    stroke_white = (15, 23, 42, 200)
    
    # NO BACKGROUND SCRIM OR BLUR - completely clean sky & balcony
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    
    def draw_highlighted_text(text, font, pos, top_col, bot_col, stroke_col, stroke_w=1):
        x, y = pos
        bb = font.getbbox(text)
        tw = bb[2] - bb[0]
        th = bb[3] - bb[1]
        pad = 20 * scale
        
        item_img = Image.new('RGBA', (tw + pad*2, th + pad*2), (0, 0, 0, 0))
        
        # 1. Tight crisp shadow (subtle, clean, natural)
        sh_img = Image.new('RGBA', (tw + pad*2, th + pad*2), (0, 0, 0, 0))
        sh_d = ImageDraw.Draw(sh_img)
        sh_d.text((pad - bb[0] + 1*scale, pad - bb[1] + 2*scale), text, font=font, fill=(0, 0, 0, 160))
        sh_img = sh_img.filter(ImageFilter.GaussianBlur(1.2 * scale))
        item_img.alpha_composite(sh_img)
        
        # 2. Ultra-fine micro-contour (1px at 2x = 0.5px at 1x)
        if stroke_w > 0 and stroke_col:
            sm = Image.new('L', (tw + pad*2, th + pad*2), 0)
            smd = ImageDraw.Draw(sm)
            smd.text((pad - bb[0], pad - bb[1]), text, font=font, fill=255, stroke_width=stroke_w, stroke_fill=255)
            st_layer = Image.new('RGBA', (tw + pad*2, th + pad*2), stroke_col)
            item_img.paste(st_layer, (0, 0), sm)
            
        # 3. Vertical gradient fill
        c1 = np.array(top_col, dtype=float)
        c2 = np.array(bot_col, dtype=float)
        grad_arr = np.zeros((th + pad*2, tw + pad*2, 4), dtype=np.uint8)
        for r in range(th + pad*2):
            rat = r / max(1, th + pad*2)
            col = c1 * (1 - rat) + c2 * rat
            grad_arr[r, :, :3] = col.astype(np.uint8)
            grad_arr[r, :, 3] = 255
        g_img = Image.fromarray(grad_arr, 'RGBA')
        
        tm = Image.new('L', (tw + pad*2, th + pad*2), 0)
        tmd = ImageDraw.Draw(tm)
        tmd.text((pad - bb[0], pad - bb[1]), text, font=font, fill=255)
        
        item_img.paste(g_img, (0, 0), tm)
        overlay.alpha_composite(item_img, (int(x - pad), int(y - pad)))
        
    # Line 1: Badge
    bb1 = f_badge.getbbox(l1)
    w1 = bb1[2] - bb1[0]
    draw_highlighted_text(l1, f_badge, (cx - w1//2, 70*scale), (255,255,255), (230,230,230), (15,23,42,180), stroke_w=1)
    
    # Line 2: PREMIUM INVISIBLE GRILLS IN
    bb2 = f_green.getbbox(l2)
    w2 = bb2[2] - bb2[0]
    draw_highlighted_text(l2, f_green, (cx - w2//2, 110*scale), c_green_top, c_green_bot, stroke_green, stroke_w=1)
    
    # Line 3: [CITY]: EXPERIENCE
    draw_highlighted_text(l3_city, f_mid, (start_x3, 165*scale), c_gold_top, c_gold_bot, stroke_gold, stroke_w=1)
    draw_highlighted_text(l3_exp,  f_mid, (start_x3 + wc, 165*scale), c_gold_top, c_gold_bot, stroke_gold, stroke_w=1)
    
    # Lines 4 & 5: LANDMARKS
    y_lmk = 218 * scale
    for lmk in cfg['landmarks']:
        bbl = f_lmk.getbbox(lmk)
        wl = bbl[2] - bbl[0]
        draw_highlighted_text(lmk, f_lmk, (cx - wl//2, y_lmk), c_white_top, c_white_bot, stroke_white, stroke_w=1)
        y_lmk += 48 * scale
        
    # NOTE: Tagline line 6 ('Unmatched safety...') is REMOVED completely per user request!
    
    # Composite onto clean base image
    final_2x = Image.alpha_composite(base_2x, overlay)
    final_1080 = final_2x.resize((1080, 1080), Image.LANCZOS).convert('RGB')
    final_1080.save(cfg['out'], quality=96)
    print(f"Rendered {cfg['slug']} -> {cfg['out']}")

for cfg in cities_config:
    render_city_poster(cfg)

print('ALL 7 CITIES RE-RENDERED WITHOUT BLUR & WITHOUT UNMATCHED LINE!')
