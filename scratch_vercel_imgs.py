import urllib.request
import re

url = 'https://d-view-seven.vercel.app/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

# find all occurrences of src="...", srcSet="...", url(...)
urls = set()
for m in re.finditer(r'(?:src|srcSet|srcset)\s*=\s*["\']([^"\']+)["\']', html):
    urls.add(m.group(1))

for m in re.finditer(r'url\(\s*["\']?([^"\'\)]+)["\']?\s*\)', html):
    urls.add(m.group(1))

# Also search for dashboard in the entire HTML
for m in re.finditer(r'["\'](/images/[^"\']+)["\']', html):
    urls.add(m.group(1))

for m in re.finditer(r'["\'](/assets/[^"\']+)["\']', html):
    urls.add(m.group(1))

for u in sorted(urls):
    print(u)
