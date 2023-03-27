![cover](https://user-images.githubusercontent.com/10263978/228079210-921db0c8-1573-469d-aca9-a34c23c035b4.png)

# Material Theme Builder

The Material Theme builder is built to assist in exploring the possibilities of dynamic color, harmonizing brand colors, and providing a type scale. All with implementation in mind to bridge designer and developer workflows. With built-in code export, Material Theme Builder makes it easy migrate to the M3 color system and take advantage of dynamic color.

### Visualize dynamic and create a custom theme 
Material Design’s Dynamic color brings user personalization to apps by generating accessible light and dark color schemes from a user’s device wallpaper. Build a custom Material Theme, allowing you to migrate to Material Design 3’s new color system, and export it to code. 

Material Theme Builder:
https://m3.material.io/theme-builder/

Material Theme Builder for Figma:
https://goo.gle/material-theme-builder-figma

## What's New
⚠ The latest update introduces Surfaces based on tone values, these are no longer read-only overlays. Surfaces 1–5 will remain in the builder for current users, but we recommend migrating to new surface tokens as soon as possible.
Fixed accents add a new set of colors that will remain consistent across light and dark themes. 

- Repair: If using a previously generated color scheme, Repair your theme or Create a new theme to get the new color tokens. 

Previous release: 
- New UI for custom colors for easier to read labels and descriptive subtitles.
- Extended color with harmonization is now on both the Web version and Figma plugin! Your extended colors will carry between Dynamic and Custom scheme. (Harmonization is only to visualize with dynamic color).
- Speaking of extended colors, you can now rename and delete from within the plugin.
- The new HCT color picker allows to update colors using Hue, Chroma, and Tone. Plus the color picker allows to copy/paste hex code values.
- The Figma plugin includes setup settings and a settings modal to toggle certain features off if not needed and even try out Beta features!  

## How to use - Figma plugin
<img width="1024" alt="how to get started with theme builder" src="https://user-images.githubusercontent.com/10263978/228079269-44a0a810-c936-47c4-b331-ef9d79fe965a.png">

#### Setup
1. Install from the [plugin page](https://www.figma.com/community/plugin/1034969338659738588/Material-Theme-Builder), by clicking **Install** in the top right corner.
2. After installing, open the plugin from the Figma menu or command and click Get Started to generate a theme (material-theme) and Material Design tokens as Figma styles.
3. Using design kit components? Turn on State Layers within settings, this will generate needed state layers when customizing the theme. 
4. Select and **Swap** to update the theme used in the components.
5. Assign MD tokens (Figma styles) to custom elements and components, then **swap** to the currently selected theme.

<img width="666" alt="settings_statelayers" src="https://user-images.githubusercontent.com/10263978/228084527-37974bde-1c99-4f7f-98af-17b44ad54137.png">


#### Dynamic Color
1. With Dynamic selected, drop an image in or click to **choose an image** to derive key colors into a scheme from an image. Below the image the source color will update based on the image. The theme’s colors and any elements or components using the theme will update based on the image.
2. Or enter a source color manually to emulate inputting an image. 
3. Don’t want to choose an image or color? Randomize the source color with **Shuffle**.

<img width="1024" alt="dynamic" src="https://user-images.githubusercontent.com/10263978/228084131-52964273-139f-4465-97f0-59f047ed1ded.png">


#### Create a custom theme
Your brand’s colors can still take advantage of the Material You color story without dynamic color controlling the UI with the help of some resources. Colors will be shifted to generate accessible colors within the same color space as dynamic colors. 

1. With **Custom** selected, select the color input for Primary. 
2. A full scheme can be generated from Primary or input your available brand colors into the rest of the color inputs in their appropriate color assignments. 

<img width="1024" alt="custom" src="https://user-images.githubusercontent.com/10263978/228079412-4dabedc6-f6e8-44e0-90df-ff4bdbe96e3e.png">

####  Extended Colors**
1. To extend out past user-generated dynamic colors or the baseline schemes. In **Custom**, click **Add a color**. A color input will appear and update the color schematic. 
2. Click on the color well to prompt a color picker to update the color. 
3. To rename a custom color, with the modal closed. Find the source group and update the Custom style name. The color name will be updated next time the plugin is open.
4. Delete by deleting the custom color source (in Figma styles).

![extended](https://user-images.githubusercontent.com/10263978/228080337-4595a876-eaa1-454a-aa64-b0830b3282a2.png)


#### Add theme and presets
You can change the current theme, add a new theme, and reset the current theme within the **Theme menu** (dropdown at top). 

<img width="1024" alt="add a theme" src="https://user-images.githubusercontent.com/10263978/228081295-6bded47c-4e28-449e-b8e3-d62d7520b9c0.png">

Selecting a different theme changes the current theme to edit. **Swap** with will update whatever is selected to the current theme in the dropdown. 

Presets are available in the menu to reset the current theme back to the Material baseline theme. 

#### Export
Ready to implement your theme? Click **Export** and select your desired code format. 
Learn about themes and [migrating to M3](https://material.io/blog/migrating-material-3) or try out implementation with [Adding dynamic color to your app codelab](https://codelabs.developers.google.com/codelabs/apply-dynamic-color#0). 

## How to use - Web

<img width="892" alt="web_mtb" src="https://user-images.githubusercontent.com/10263978/228082612-0c12d312-5012-4e59-84e2-6e92ef25385b.png">

#### Dynamic Color 
1. With **Dynamic** selected, explore how dynamic color can affect an app’s color scheme.
2. Either by selecting a wallpaper to update the UI example with colors generated from the selected wallpaper. 
3. Select **Shuffle** to randomize the source color to update the color scheme. 
4. **Add your wallpaper** will generate a color scheme for the app example using your chosen image. The wallpaper will not be uploaded or previewed. 

#### Create a custom theme
Your brand’s colors can still take advantage of the Material You color story without dynamic color controlling the UI with the help of some resources. Colors will be shifted to generate accessible colors within the same color space as dynamic colors. 
1. With **Custom** selected, select the color input for Primary. 
2. A full scheme can be generated from Primary or input your available brand colors into the rest of the color inputs in their appropriate color assignments. 

<img width="892" alt="web_custom" src="https://user-images.githubusercontent.com/10263978/228082629-65fba055-ea79-467a-a60e-d2260e7c3a1e.png">

#### Extended and harmonized colors
1. To extend out past user-generated dynamic colors or the baseline schemes. In **Custom**, click Add a color. A color input will appear and update the color schematic. 
2. Click on the color well to prompt a color picker to update the color. 
3. To rename a custom color, hover over the color and click the **edit** (pencil) icon.
4. Delete by clicking the trash icon. 
5. Extended colors can be harmonized (color shifted to) with the dynamic colors. Checking Harmonize will show the harmonized versions under **Dynamic**. 

<img width="892" alt="web_extended" src="https://user-images.githubusercontent.com/10263978/228082660-cbe63076-105b-4702-bf60-480b52cb6615.png">

#### Export
Ready to implement your theme? Click **Export** and select your desired code format. 
Learn about themes and [migrating to M3](https://material.io/blog/migrating-material-3) or try out implementation with [Adding dynamic color to your app codelab](https://codelabs.developers.google.com/codelabs/apply-dynamic-color#0). 
