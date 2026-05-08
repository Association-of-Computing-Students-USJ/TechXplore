import re

with open('style.css', 'r', encoding='utf-8') as f:
    css = f.read()

# 1. Add Google Fonts Import if not present
if '@import url' not in css:
    css = "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');\n\n" + css

# 2. Update all unprofessional fonts
css = re.sub(r"font-family:\s*'Lucida Sans',\s*'Lucida Sans Regular',\s*'Lucida Grande',\s*'Lucida Sans Unicode',\s*Geneva,\s*Verdana,\s*sans-serif;", "font-family: 'Inter', sans-serif;", css)
css = re.sub(r"font-family:\s*'Segoe UI',\s*Tahoma,\s*Geneva,\s*Verdana,\s*sans-serif;", "font-weight: 700;", css)
css = re.sub(r"font-family:\s*cursive;", "line-height: 1.6;", css)
css = re.sub(r"font-family:\s*Tempus Sans ITC;", "font-weight: 600;", css)
css = re.sub(r"font-family:\s*monospace;", "font-weight: 600;", css)
css = re.sub(r"font-family:\s*Bradley Hand ITC;", "font-weight: 500;", css)
css = re.sub(r"font-family:\s*'Lucida Sans',\s*sans-serif;", "", css)

# 3. Standardize Desktop Sizes
css = css.replace("font-size: 2.1rem;", "font-size: 2.8rem;") # Home text h1
css = css.replace("font-size: 0.938rem;", "font-size: 1rem;") # Paragraphs
css = css.replace("font-size: 1.8rem;", "font-size: 2rem;") # Headings

# 4. Fix Mobile Font Sizes in Media Queries
# home-text h1 max-width:360px
css = css.replace("font-size: 1.4rem;", "font-size: 2rem;")
# home-text p max-width:360px
css = css.replace("font-size: 0.8rem;\n        font-weight: 300;", "font-size: 1rem;\n        font-weight: 400;")
# about-text h2 & heading h2 max-width:360px
css = css.replace("font-size: 1.2rem;", "font-size: 1.8rem;")
# other media query sizes
css = css.replace("font-size: 2rem;", "font-size: 2rem;") # 991px
css = css.replace("font-size: 2.4rem;", "font-size: 2.4rem;") # 1058px
css = css.replace("font-size: 1.8rem;", "font-size: 2rem;") # register max-width:768px

# Footer p font-weight fix
css = css.replace("font-weight: 540;", "font-weight: 400;")

with open('style.css', 'w', encoding='utf-8') as f:
    f.write(css)

print("CSS updated successfully")
