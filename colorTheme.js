"strict mode"
let colorTheme = [
    {
        name: 'firstTheme',
        primary: '#FFC107',
        secondary: '#FF9800',
        accent: '#FF5722',
    },
    {
        name: 'secondTheme',
        primary: '#673AB7',
        secondary: '#3F51B5',
        accent: '#2196F3',
    },
    {
        name: "thirdTheme",
        primary: '#009688',
        secondary: '#4CAF50',
        accent: '#8BC34A',
    },
    {   name: 'fourthTheme',
        primary: '#FFEB3B',
        secondary: '#CDDC39',
        accent: '#FFC107',
    }
]
const rootElement = document.documentElement;

rootElement.style.setProperty('--color-main', colorTheme[0].primary);
rootElement.style.setProperty('--color-background', colorTheme[0].secondary);
rootElement.style.setProperty('--color-accent', colorTheme[0].accent);

for(let i = 0; i < colorTheme.length; i++){
    console.log(colorTheme[i]);
    document.getElementById(colorTheme[i].name).addEventListener('click', function(){
        rootElement.style.setProperty('--color-main', colorTheme[i].primary);
        rootElement.style.setProperty('--color-background', colorTheme[i].secondary);
        rootElement.style.setProperty('--color-accent', colorTheme[i].accent);
        })

}

