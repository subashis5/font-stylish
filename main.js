document.addEventListener('DOMContentLoaded', () => {
  const fontSelect = document.getElementById('font-select');
  const sizeInput = document.getElementById('size-input');
  const colorInput = document.getElementById('color-input');
  const preview = document.getElementById('preview');
  const startScreen = document.getElementById('start-screen');
  const controls = document.getElementById('controls');
  const nintendoTemplateButton = document.getElementById('nintendo-template');
  const backButton = document.getElementById('back-button');
  const downloadButton = document.getElementById('download-button');
  const strokeColorInput = document.getElementById('stroke-color-input');
  const strokeWidthInput = document.getElementById('stroke-width-input');
  const segaTemplateButton = document.getElementById('sega-template');
  const wiiTemplateButton = document.getElementById('wii-template');
  const adultSwimTemplateButton = document.getElementById('adult-swim-template');
  const nickelodeonTemplateButton = document.getElementById('nickelodeon-template');
  const gameboyTemplateButton = document.getElementById('gameboy-template');
  const superMarioMakerTemplateButton = document.getElementById('super-mario-maker-template');
  const spongebobTemplateButton = document.getElementById('spongebob-template');
  const familyGuyTemplateButton = document.getElementById('family-guy-template');
  const pokemonTemplateButton = document.getElementById('pokemon-template');
  const omoriTemplateButton = document.getElementById('omori-template');
  const angryBirdsTemplateButton = document.getElementById('angry-birds-template');
  const weezerTemplateButton = document.getElementById('weezer-template');
  const pepsiTemplateButton = document.getElementById('pepsi-template');
  const disneyTemplateButton = document.getElementById('disney-template');
  const disneyChannelTemplateButton = document.getElementById('disney-channel-template');
  const toyStoryTemplateButton = document.getElementById('toy-story-template');
  const incrediboxTemplateButton = document.getElementById('incredibox-template');

  function updatePreview() {
    const selection = window.getSelection();
    const selectedText = selection.toString();

    // If text is selected, apply styles only to selected text
    if (selectedText.length > 0) {
      const range = selection.getRangeAt(0);
      const selectedFragment = range.extractContents();
      
      const styledSpan = document.createElement('span');
      styledSpan.style.fontFamily = fontSelect.value;
      styledSpan.style.color = colorInput.value;
      styledSpan.style.fontSize = sizeInput.value + 'px';
      
      // Apply text stroke if width is greater than 0
      if (strokeWidthInput.value > 0) {
        styledSpan.style.webkitTextStrokeColor = strokeColorInput.value;
        styledSpan.style.webkitTextStrokeWidth = strokeWidthInput.value + 'px';
        styledSpan.style.textStrokeColor = strokeColorInput.value;
        styledSpan.style.textStrokeWidth = strokeWidthInput.value + 'px';
      }

      styledSpan.appendChild(selectedFragment);
      range.insertNode(styledSpan);
    } else {
      // If no text is selected, apply styles to entire preview
      // First, reset any existing styles
      preview.innerHTML = preview.textContent;
      
      // Now apply new styles to entire content
      preview.style.fontFamily = fontSelect.value;
      preview.style.fontSize = sizeInput.value + 'px';
      preview.style.color = colorInput.value;
      
      // Add stroke styles
      preview.style.webkitTextStrokeColor = strokeColorInput.value;
      preview.style.webkitTextStrokeWidth = strokeWidthInput.value + 'px';
      preview.style.textStrokeColor = strokeColorInput.value;
      preview.style.textStrokeWidth = strokeWidthInput.value + 'px';
    }
  }

  function applyNintendoTemplate() {
    preview.textContent = "{Nintendo®}";
    fontSelect.value = "NuHanafudaya";
    sizeInput.value = "32";
    colorInput.value = "#FF0000";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applySEGATemplate() {
    preview.textContent = "SEGA";
    fontSelect.value = "SEGA";
    sizeInput.value = "32";
    colorInput.value = "#0060A8";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyWiiTemplate() {
    preview.textContent = "Wii";
    fontSelect.value = "WiiSans";
    sizeInput.value = "32";
    colorInput.value = "#939598";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyAdultSwimTemplate() {
    preview.textContent = "[adult swim]";
    fontSelect.value = "HelveticaNeue";
    sizeInput.value = "32";
    colorInput.value = "#000000";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyNickelodeonTemplate() {
    preview.textContent = "nickelodeon";
    fontSelect.value = "MUNDONICK";
    sizeInput.value = "32";
    colorInput.value = "#F57C14";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyGameBoyTemplate() {
    preview.textContent = "GAME BOY";
    fontSelect.value = "GameBoy";
    sizeInput.value = "32";
    colorInput.value = "#2E3192";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applySuperMarioMakerTemplate() {
    preview.textContent = "SUPER MARIO MAKER";
    fontSelect.value = "SuperMarioMaker2";
    sizeInput.value = "32";
    colorInput.value = "#000000";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applySpongebobTemplate() {
    preview.textContent = "SpongeBob";
    fontSelect.value = "KrabbyPatty";
    sizeInput.value = "32";
    colorInput.value = "#FED304";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyFamilyGuyTemplate() {
    preview.textContent = "FAMILY GUY";
    fontSelect.value = "FamilyGuy";
    sizeInput.value = "32";
    colorInput.value = "#00A0D4";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyPokemonTemplate() {
    preview.textContent = "POKEMON";
    fontSelect.value = "Pokemon";
    sizeInput.value = "32";
    colorInput.value = "#FFCB05";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyLogoTemplate(logo, fontFamily, color) {
    preview.textContent = logo;
    fontSelect.value = fontFamily;
    sizeInput.value = "32";
    colorInput.value = color;
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyOmoriTemplate() {
    preview.textContent = "OMORI";
    fontSelect.value = "Omori";
    sizeInput.value = "32";
    colorInput.value = "#000000";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyAngryBirdsTemplate() {
    preview.textContent = "Angry Birds";
    fontSelect.value = "AngryBirds";
    sizeInput.value = "32";
    colorInput.value = "#ED1C24";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyWeezerTemplate() {
    preview.textContent = "weezer";
    fontSelect.value = "Weezer";
    sizeInput.value = "32";
    colorInput.value = "#000000";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyPepsiTemplate() {
    preview.textContent = "PEPSI";
    fontSelect.value = "Pepsi";
    sizeInput.value = "32";
    colorInput.value = "#004B93";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyDisneyTemplate() {
    preview.textContent = "Disney";
    fontSelect.value = "Walter";
    sizeInput.value = "32";
    colorInput.value = "#000000";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyDisneyChannelTemplate() {
    preview.textContent = "Disney Channel";
    fontSelect.value = "DisneyChannel";
    sizeInput.value = "32";
    colorInput.value = "#000000";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyToyStoryTemplate() {
    preview.textContent = "TOY STORY";
    fontSelect.value = "PeaceSans";
    sizeInput.value = "32";
    colorInput.value = "#0073CF";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "0";
    updatePreview();
  }

  function applyIncrediboxTemplate() {
    preview.textContent = "INCREDIBOX";
    fontSelect.value = "Allan";
    sizeInput.value = "32";
    colorInput.value = "#FFFFFF";
    strokeColorInput.value = "#000000";
    strokeWidthInput.value = "1";
    updatePreview();
  }

  function downloadLogo() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = preview.offsetWidth;
    canvas.height = preview.offsetHeight;

    // Clone the preview to avoid modifying the original
    const clonedPreview = preview.cloneNode(true);

    // Prepare canvas drawing
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Recursively render text with mixed styles
    function renderTextWithStyles(element, x, y) {
      element.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          ctx.font = `${sizeInput.value}px ${fontSelect.value}`;
          ctx.fillStyle = colorInput.value;
          ctx.strokeStyle = strokeColorInput.value;
          ctx.lineWidth = strokeWidthInput.value;

          if (strokeWidthInput.value > 0) {
            ctx.strokeText(node.textContent, x, y);
          }
          ctx.fillText(node.textContent, x, y);
        } else if (node.nodeType === Node.ELEMENT_NODE) {
          ctx.font = `${sizeInput.value}px ${node.style.fontFamily || fontSelect.value}`;
          ctx.fillStyle = node.style.color || colorInput.value;
          ctx.strokeStyle = node.style.webkitTextStrokeColor || strokeColorInput.value;
          ctx.lineWidth = parseFloat(node.style.webkitTextStrokeWidth) || strokeWidthInput.value;

          if (ctx.lineWidth > 0) {
            ctx.strokeText(node.textContent, x, y);
          }
          ctx.fillText(node.textContent, x, y);
        }
      });
    }

    renderTextWithStyles(clonedPreview, canvas.width / 2, canvas.height / 2);

    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `${preview.textContent}_logo.png`;
    link.href = dataURL;
    link.click();
  }

  document.addEventListener('keydown', (e) => {
    const isPreview = e.target.id === 'preview';
    const isInput = e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT';

    // Allow normal keyboard interaction only in preview and form inputs
    if (!isPreview && !isInput) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  document.addEventListener('paste', (e) => {
    if (e.target.id !== 'preview') {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  document.addEventListener('cut', (e) => {
    if (e.target.id !== 'preview') {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  document.addEventListener('copy', (e) => {
    if (e.target.id !== 'preview') {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  document.addEventListener('beforeinput', (e) => {
    if (e.target.id !== 'preview' && !['INPUT', 'SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }, true);

  document.addEventListener('input', (e) => {
    if (e.target.id !== 'preview' && !['INPUT', 'SELECT'].includes(e.target.tagName)) {
      e.preventDefault();
      e.stopPropagation();
      // Revert any changes
      if (e.target.defaultValue !== undefined) {
        e.target.value = e.target.defaultValue;
      } else {
        e.target.textContent = e.target.getAttribute('data-original-text') || '';
      }
    }
  }, true);

  document.querySelectorAll('*').forEach(element => {
    if (element.id !== 'preview') {
      element.setAttribute('data-original-text', element.textContent);
    }
  });

  // Make preview directly editable, but prevent editing other UI elements
  preview.setAttribute('contenteditable', 'true');

  nintendoTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyNintendoTemplate();
  });

  segaTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applySEGATemplate();
  });

  wiiTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyWiiTemplate();
  });

  adultSwimTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyAdultSwimTemplate();
  });

  nickelodeonTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyNickelodeonTemplate();
  });

  gameboyTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyGameBoyTemplate();
  });

  superMarioMakerTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applySuperMarioMakerTemplate();
  });

  spongebobTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applySpongebobTemplate();
  });

  familyGuyTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyFamilyGuyTemplate();
  });

  pokemonTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyPokemonTemplate();
  });

  omoriTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyOmoriTemplate();
  });

  angryBirdsTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyAngryBirdsTemplate();
  });

  weezerTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyWeezerTemplate();
  });

  pepsiTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyPepsiTemplate();
  });

  disneyTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyDisneyTemplate();
  });

  disneyChannelTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyDisneyChannelTemplate();
  });

  toyStoryTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyToyStoryTemplate();
  });

  incrediboxTemplateButton.addEventListener('click', () => {
    startScreen.style.display = 'none';
    controls.style.display = 'flex';
    preview.style.display = 'block';
    backButton.style.display = 'block';
    downloadButton.style.display = 'block';
    applyIncrediboxTemplate();
  });

  backButton.addEventListener('click', () => {
    startScreen.style.display = 'flex';
    controls.style.display = 'none';
    preview.style.display = 'none';
    backButton.style.display = 'none';
    downloadButton.style.display = 'none';
  });

  downloadButton.addEventListener('click', downloadLogo);

  fontSelect.addEventListener('change', updatePreview);
  sizeInput.addEventListener('input', updatePreview);
  colorInput.addEventListener('input', updatePreview);

  strokeColorInput.addEventListener('input', updatePreview);
  strokeWidthInput.addEventListener('input', updatePreview);

  // Initialize preview - hide until template is chosen
  preview.style.display = 'none';
  controls.style.display = 'none';
  backButton.style.display = 'none';
  downloadButton.style.display = 'none';

  const nintendoPreview = document.createElement('span');
  nintendoPreview.classList.add('template-preview');
  nintendoPreview.textContent = "{Nintendo®}";
  nintendoPreview.style.fontFamily = "NuHanafudaya";
  nintendoPreview.style.color = "#FF0000";
  nintendoPreview.style.fontSize = "32px"; 
  nintendoTemplateButton.appendChild(nintendoPreview);

  const segaPreview = document.createElement('span');
  segaPreview.classList.add('template-preview');
  segaPreview.textContent = "SEGA";
  segaPreview.style.fontFamily = "SEGA";
  segaPreview.style.color = "#0060A8";
  segaPreview.style.fontSize = "32px"; 
  segaTemplateButton.appendChild(segaPreview);

  const wiiPreview = document.createElement('span');
  wiiPreview.classList.add('template-preview');
  wiiPreview.textContent = "Wii";
  wiiPreview.style.fontFamily = "WiiSans";
  wiiPreview.style.color = "#939598";
  wiiPreview.style.fontSize = "32px"; 
  wiiTemplateButton.appendChild(wiiPreview);

  const adultSwimPreview = document.createElement('span');
  adultSwimPreview.classList.add('template-preview');
  adultSwimPreview.textContent = "[adult swim]";
  adultSwimPreview.style.fontFamily = "HelveticaNeue";
  adultSwimPreview.style.color = "#000000";
  adultSwimPreview.style.fontSize = "32px"; 
  adultSwimTemplateButton.appendChild(adultSwimPreview);

  const nickelodeonPreview = document.createElement('span');
  nickelodeonPreview.classList.add('template-preview');
  nickelodeonPreview.textContent = "nickelodeon";
  nickelodeonPreview.style.fontFamily = "MUNDONICK";
  nickelodeonPreview.style.color = "#F57C14";
  nickelodeonPreview.style.fontSize = "32px"; 
  nickelodeonTemplateButton.appendChild(nickelodeonPreview);

  const gameBoyPreview = document.createElement('span');
  gameBoyPreview.classList.add('template-preview');
  gameBoyPreview.textContent = "GAME BOY";
  gameBoyPreview.style.fontFamily = "GameBoy";
  gameBoyPreview.style.color = "#2E3192";
  gameBoyPreview.style.fontSize = "32px"; 
  gameboyTemplateButton.appendChild(gameBoyPreview);

  const superMarioMakerPreview = document.createElement('span');
  superMarioMakerPreview.classList.add('template-preview');
  superMarioMakerPreview.textContent = "SUPER MARIO MAKER";
  superMarioMakerPreview.style.fontFamily = "SuperMarioMaker2";
  superMarioMakerPreview.style.color = "#000000";
  superMarioMakerPreview.style.fontSize = "32px"; 
  superMarioMakerTemplateButton.appendChild(superMarioMakerPreview);

  const spongebobPreview = document.createElement('span');
  spongebobPreview.classList.add('template-preview');
  spongebobPreview.textContent = "SpongeBob";
  spongebobPreview.style.fontFamily = "KrabbyPatty";
  spongebobPreview.style.color = "#FED304";
  spongebobPreview.style.fontSize = "32px"; 
  spongebobTemplateButton.appendChild(spongebobPreview);

  const familyGuyPreview = document.createElement('span');
  familyGuyPreview.classList.add('template-preview');
  familyGuyPreview.textContent = "FAMILY GUY";
  familyGuyPreview.style.fontFamily = "FamilyGuy";
  familyGuyPreview.style.color = "#00A0D4";
  familyGuyPreview.style.fontSize = "32px"; 
  familyGuyTemplateButton.appendChild(familyGuyPreview);

  const pokemonPreview = document.createElement('span');
  pokemonPreview.classList.add('template-preview');
  pokemonPreview.textContent = "POKEMON";
  pokemonPreview.style.fontFamily = "Pokemon";
  pokemonPreview.style.color = "#FFCB05";
  pokemonPreview.style.fontSize = "32px"; 
  pokemonTemplateButton.appendChild(pokemonPreview);

  const omoriPreview = document.createElement('span');
  omoriPreview.classList.add('template-preview');
  omoriPreview.textContent = "OMORI";
  omoriPreview.style.fontFamily = "Omori";
  omoriPreview.style.color = "#000000";
  omoriPreview.style.backgroundColor = "#000000";
  omoriPreview.style.padding = "2px 5px";
  omoriPreview.style.fontSize = "32px"; 
  omoriTemplateButton.appendChild(omoriPreview);

  const angryBirdsPreview = document.createElement('span');
  angryBirdsPreview.classList.add('template-preview');
  angryBirdsPreview.textContent = "Angry Birds";
  angryBirdsPreview.style.fontFamily = "AngryBirds";
  angryBirdsPreview.style.color = "#ED1C24";
  angryBirdsPreview.style.fontSize = "32px"; 
  angryBirdsTemplateButton.appendChild(angryBirdsPreview);

  const weezerPreview = document.createElement('span');
  weezerPreview.classList.add('template-preview');
  weezerPreview.textContent = "weezer";
  weezerPreview.style.fontFamily = "Weezer";
  weezerPreview.style.color = "#000000";
  weezerPreview.style.fontSize = "32px"; 
  weezerTemplateButton.appendChild(weezerPreview);

  const pepsiPreview = document.createElement('span');
  pepsiPreview.classList.add('template-preview');
  pepsiPreview.textContent = "PEPSI";
  pepsiPreview.style.fontFamily = "Pepsi";
  pepsiPreview.style.color = "#004B93";
  pepsiPreview.style.fontSize = "32px"; 
  pepsiTemplateButton.appendChild(pepsiPreview);

  const disneyPreview = document.createElement('span');
  disneyPreview.classList.add('template-preview');
  disneyPreview.textContent = "Disney";
  disneyPreview.style.fontFamily = "Walter";
  disneyPreview.style.color = "#000000";
  disneyPreview.style.fontSize = "32px"; 
  disneyTemplateButton.appendChild(disneyPreview);

  const disneyChannelPreview = document.createElement('span');
  disneyChannelPreview.classList.add('template-preview');
  disneyChannelPreview.textContent = "Disney Channel";
  disneyChannelPreview.style.fontFamily = "DisneyChannel";
  disneyChannelPreview.style.color = "#000000";
  disneyChannelPreview.style.fontSize = "32px"; 
  disneyChannelTemplateButton.appendChild(disneyChannelPreview);

  const toyStoryPreview = document.createElement('span');
  toyStoryPreview.classList.add('template-preview');
  toyStoryPreview.textContent = "TOY STORY";
  toyStoryPreview.style.fontFamily = "PeaceSans";
  toyStoryPreview.style.color = "#0073CF";
  toyStoryPreview.style.fontSize = "32px"; 
  toyStoryTemplateButton.appendChild(toyStoryPreview);

  const incrediboxPreview = document.createElement('span');
  incrediboxPreview.classList.add('template-preview');
  incrediboxPreview.textContent = "INCREDIBOX";
  incrediboxPreview.style.fontFamily = "Allan";
  incrediboxPreview.style.color = "#FFFFFF";
  incrediboxPreview.style.backgroundColor = "#000000";
  incrediboxPreview.style.padding = "2px 5px";
  incrediboxPreview.style.fontSize = "32px"; 
  incrediboxPreview.style.webkitTextStrokeColor = "#000000";  
  incrediboxPreview.style.webkitTextStrokeWidth = "1px";      
  incrediboxTemplateButton.appendChild(incrediboxPreview);
});
