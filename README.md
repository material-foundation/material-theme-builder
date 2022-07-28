![cover](https://user-images.githubusercontent.com/10263978/164115188-6437ffcd-ece5-4efa-8f5f-fac9e31f3dcd.png)

# Material Theme Builder

The Material Theme builder is built to assist in exploring the possibilities of dynamic color, harmonizing brand colors, and providing a type scale. All with implementation in mind to bridge designer and developer workflows.

### Visualize dynamic color in your UI
Material Design’s Dynamic color brings user personalization to apps by generating accessible light and dark color schemes from a user’s device wallpaper. 

### Generate a custom theme
Build a custom Material Theme, allowing you to migrate to Material Design 3’s new color system, and export it to code. 

### Migrate to Material Design 3
With built-in code export, Material Theme Builder makes it easy migrate to the M3 color system and take advantage of dynamic color.

Material Theme Builder:
https://m3.material.io/theme-builder/

Material Theme Builder for Figma:
https://goo.gle/material-theme-builder-figma

## What's New
Both the web and Figma plugin have been updated recently to include:
1. New UI for custom colors for easier to read labels and descriptive subtitles.
2. Extended color with harmonization is now on both the Web version and Figma plugin! Your extended colors will carry between Dynamic and Custom scheme. (Harmonization is only to visualize with dynamic color).
3. Speaking of extended colors, you can now rename and delete from within the plugin.
4. The new HCT color picker allows to update colors using Hue, Chroma, and Tone. Plus the color picker allows to copy/paste hex code values.
5. The Figma plugin includes setup settings and a settings modal to toggle certain features off if not needed and even try out Beta features!  

## How to use - Figma plugin

⚠ _Token structure in the Material Design Kit and Material Theme Builder have been updated for easier readability and to work with Figma updates. MTB has a migration script built in for the Kit and generated color diagrams.
Use Swap on elements with the previous token structure to update them to the new structure._ ⚠

#### Setup
1. Install from the [plugin page](https://www.figma.com/community/plugin/1034969338659738588/Material-Theme-Builder), by clicking **Install** in the top right corner.
2. After installing, open the plugin from the Figma menu or command and click Get Started to generate a theme (material-theme) and Material Design tokens as Figma styles.
3. Using design kit components? Select and **Swap** to update the theme used in the components.
4. Assign MD tokens (Figma styles) to custom elements and components, then **swap** to the currently selected theme.

<img width="1456" alt="getstarted" src="https://user-images.githubusercontent.com/10263978/164114726-3637ad9f-ed4d-4f5b-9630-3f62c3380c28.png">

#### Dynamic Color
1. With Dynamic selected, drop an image in or click to **choose an image** to derive key colors into a scheme from an image. Below the image the source color will update based on the image. The theme’s colors and any elements or components using the theme will update based on the image.
2. Or enter a source color manually to emulate inputting an image. 
3. Don’t want to choose an image or color? Randomize the source color with **Shuffle**.
<img width="1456" alt="add image" src="https://user-images.githubusercontent.com/10263978/164114777-62b5dad2-f998-4051-8e66-62c8ff2314fd.png">

#### Create a custom theme
Your brand’s colors can still take advantage of the Material You color story without dynamic color controlling the UI with the help of some resources. Colors will be shifted to generate accessible colors within the same color space as dynamic colors. 

1. With **Custom** selected, select the color input for Primary. 
2. A full scheme can be generated from Primary or input your available brand colors into the rest of the color inputs in their appropriate color assignments. 

![scheme-4-colors](https://user-images.githubusercontent.com/10263978/164114677-06aee19f-10a4-4435-853e-cd2e787536a6.png)

####  Extended Colors**
1. To extend out past user-generated dynamic colors or the baseline schemes. In **Custom**, click **Add a color**. A color input will appear and update the color schematic. 
2. Click on the color well to prompt a color picker to update the color. 
3. To rename a custom color, with the modal closed. Find the source group and update the Custom style name. The color name will be updated next time the plugin is open.
4. Delete by deleting the custom color source (in Figma styles).

![custom-colors](https://user-images.githubusercontent.com/10263978/164114691-74035195-173b-42a5-9ac4-68a347a7f2de.png)

#### Add theme and presets
You can change the current theme, add a new theme, and reset the current theme within the **Theme menu** (dropdown at top). 

<img width="1456" alt="new theme" src="https://user-images.githubusercontent.com/10263978/164114549-598f5f27-2567-45ee-b2c2-143932add0fc.png">

Selecting a different theme changes the current theme to edit. **Swap** with will update whatever is selected to the current theme in the dropdown. 

Presets are available in the menu to reset the current theme back to the Material baseline theme. 

#### Export
Ready to implement your theme? Click **Export** and select your desired code format. 
Learn about themes and [migrating to M3](https://material.io/blog/migrating-material-3) or try out implementation with [Adding dynamic color to your app codelab](https://codelabs.developers.google.com/codelabs/apply-dynamic-color#0). 

## How to use - Web

<img width="892" alt="web" src="https://user-images.githubusercontent.com/10263978/164114468-2c4603f7-f61e-4886-87a0-b9f94fc8ac15.png">

#### Dynamic Color 
1. With **Dynamic** selected, explore how dynamic color can affect an app’s color scheme.
2. Either by selecting a wallpaper to update the UI example with colors generated from the selected wallpaper. 
3. Select **Shuffle** to randomize the source color to update the color scheme. 
4. **Add your wallpaper** will generate a color scheme for the app example using your chosen image. 

<img width="892" alt="add wallpaper" src="https://user-images.githubusercontent.com/10263978/164114434-01860515-9d96-4235-b13f-cf2b48e24a7d.png">

#### Create a custom theme
Your brand’s colors can still take advantage of the Material You color story without dynamic color controlling the UI with the help of some resources. Colors will be shifted to generate accessible colors within the same color space as dynamic colors. 
1. With **Custom** selected, select the color input for Primary. 
2. A full scheme can be generated from Primary or input your available brand colors into the rest of the color inputs in their appropriate color assignments. 

<img width="892" alt="custom" src="https://user-images.githubusercontent.com/10263978/164114391-d0c81c1f-b02a-43a0-a492-d756cac10258.png">

#### Extended and harmonized colors
1. To extend out past user-generated dynamic colors or the baseline schemes. In **Custom**, click Add a color. A color input will appear and update the color schematic. 
2. Click on the color well to prompt a color picker to update the color. 
3. To rename a custom color, hover over the color and click the **edit** (pencil) icon.
4. Delete by clicking the trash icon. 
5. Extended colors can be harmonized (color shifted to) with the dynamic colors. Checking Harmonize will show the harmonized versions under **Dynamic**. 

<img width="892" alt="extended" src="https://user-images.githubusercontent.com/10263978/164114355-f39058f0-3afd-4373-9582-c27f618ffb8b.png">

#### Export
Ready to implement your theme? Click **Export** and select your desired code format. 
Learn about themes and [migrating to M3](https://material.io/blog/migrating-material-3) or try out implementation with [Adding dynamic color to your app codelab](https://codelabs.developers.google.com/codelabs/apply-dynamic-color#0). 
