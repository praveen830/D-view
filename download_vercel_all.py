import urllib.request
import os

out_dir = 'C:/Users/surya/.gemini/antigravity-ide/brain/1bc39c91-e9ba-46e3-9c6f-447b5450f46c/scratch/vercel'
os.makedirs(out_dir, exist_ok=True)

cities = [
    'visakhapatnam',
    'rajahmundry',
    'vijayawada',
    'guntur',
    'kakinada',
    'nellore',
    'ongole'
]

for c in cities:
    for suffix in ['.jpg', '-9x16.jpg']:
        filename = f'dashboard-{c}{suffix}'
        url = f'https://d-view-seven.vercel.app/images/dashboard/{filename}'
        dst = os.path.join(out_dir, filename)
        try:
            urllib.request.urlretrieve(url, dst)
            print(f'Downloaded {filename}: {os.path.getsize(dst)} bytes')
        except Exception as e:
            print(f'Failed {filename}:', e)

# Also check ongole-city-poster.jpg
try:
    urllib.request.urlretrieve('https://d-view-seven.vercel.app/images/dashboard/ongole-city-poster.jpg', os.path.join(out_dir, 'ongole-city-poster.jpg'))
    print('Downloaded ongole-city-poster.jpg')
except Exception as e:
    print('Failed ongole-city-poster.jpg:', e)
