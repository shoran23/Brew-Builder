let seed_yeast = [
    {
        name: "Frankenyeast",
        lab: "Various",
        type: "Ale",
        temp: [62,75],
        attenuation: 75,
        flocculation: "Low",
        notes: "A blend of twenty-five yeast strains, most of which are English or Belgian in origin. Best for: Anything where interesting yeast character is desired."
    },
    {
        name: "Nottinghom Ale Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [32,32],
        attenuation: 77.5,
        flocculation: "",
        notes: ""
    },
    {
        name: "Array American Hefeweizen Ale Yeast WLP320",
        lab: "White Labs",
        type: "Ale",
        temp: [65,69],
        attenuation: 76,
        flocculation: "Low",
        notes: ""
    },
    {
        name: "WLP001 California Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [68,73],
        attenuation: 76.5,
        flocculation: "High",
        notes: "Very clean flavor, balance and stability. Accentuates hop flavor Versitile - can be used to make any style ale.Best for: American Style Ales, Ambers, Pale Ales, Brown Ale, Strong Ale"
    },
    {
        name: "WLP002 English Ale",
        lab: "White",
        type: "Ale",
        temp: [65,68],
        attenuation: 66.5,
        flocculation: "Very High",
        notes: "Classic ESB strain best for English style milds, bitters, porters and English style stouts. Leaves a clear beer with some residual sweetness.Best for: English Pale Ale, ESB, India Pale Ale, Brown Ale, Porter, Sweet Stouts and Strong Ales"
    },
    {
        name: "WLP003 German Ale II",
        lab: "White Labs",
        type: "Ale",
        temp: [65,70],
        attenuation: 76.5,
        flocculation: "Medium",
        notes: "Strong sulfer component will reduce with aging. Clean flavor, but with more ester production than regular German Ale Yeast.Best for: Kolsch, Alt and German Pale Ales"
    },
    {
        name: "WLP004 Irish Ale Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [65,68],
        attenuation: 71.5,
        flocculation: "Medium",
        notes: "Excellent for Irish Stouts. Produces slight hint of diacetyl balanced by a light fruitiness and a slightly dry crispness.Best for: Irish Ales, Stouts, Porters, Browns, Reds and Pale Ale"
    },
    {
        name: "WLP005 Briish Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [67,74],
        attenuation: 70.5,
        flocculation: "High",
        notes: "This yeast has higher attenuation than the White Labs English Ale yeast strains. Produces a malty flavored beer.Best for: Excellent for all English style ales including bitters, pale ale, porters and brown ale."
    },
    {
        name: "WLP006 Bedford British Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [65,70],
        attenuation: 76,
        flocculation: "High",
        notes: "High attenuation. Ferments dry with high flocculation. Distinctive ester profile. Good for most English ale styles.Best for: English style ales - bitter, pale, porter and brown ale"
    },
    {
        name: "WLP007 Dry English Ale",
        lab: "White",
        type: "Ale/",
        temp: [65,70],
        attenuation: 75,
        flocculation: "Low",
        notes: "Clean, Highly flocculant, and highly attentive yeast. Similar to White labs English Ale yeast, but more attentive. Suitable for high gravity ales. Best for: Pale Ales, Amber, ESB, Brown Ales, Strong Ales"
    },
    {
        name: "WLP008 East Coast Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [68,73],
        attenuation: 72.5,
        flocculation: "Low",
        notes: "White labs 'Brewer Patriot' strain can be used to reproduce many of the American versions of classic beer styles. Very clean with low esters.  Best for: American Ales, Golden ales, Blonde Ale, Pale Ale and German Alt styles"
    },
    {
        name: "WLP009 Australian",
        lab: "White labs",
        type: "Ale",
        temp: [65,70],
        attenuation: 72.5,
        flocculation: "High",
        notes: "White Labs entry for Australian Ales. Produces a clean, malty finish with pleasant ester character. Bready character. Can ferment clean at high temperatures.  Best for: Australian Ales, English Ales"
    },
    {
        name: "WLP011 European Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [65,70],
        attenuation: 67.5,
        flocculation: "Medium",
        notes: "Malty, Northern European ale yeast. Low ester production, low sulfer, gives a clean profile. Low attenuation contributes to malty taste.  Best for: Alt, Kolsch, malty English Ales, Fruit beers"
    },
    {
        name: "WLP013 London Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [66,71],
        attenuation: 71,
        flocculation: "Medium",
        notes: "Dry, malty ale yeast. Produces a complex, oak flavored ester character. Hop bitterness comes through well.  Best for: Classic British Pale Ales, Bitters and Stouts"
    },
    {
        name: "WLP022 Essex Ale Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [66,70],
        attenuation: 73.5,
        flocculation: "Medium",
        notes: "Flavorful British yeast with a drier finish than many ale yeasts. Bready and fruity in character. Well suited for top cropping (collecting). Does not flocculate as much as WLP005 or WLP002.  Best for: British milds, pale ales, bitters, stouts."
    },
    {
        name: "WLP023 Burton Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [68,73],
        attenuation: 72,
        flocculation: "Medium",
        notes: "Burton-on-trent yeast produces a complex character. Flavors include apple, pear, and clover honey.  Best for: All English styles including Pale Ale, IPA, Porter, Stout and Bitters."
    },
    {
        name: "WLP026 Southwold Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [66,69],
        attenuation: 71.5,
        flocculation: "Medium",
        notes: "From Suffolk county. Products complex fruity and citrus flavors. Slight sulfer production, but this will fade with ageing.  Best for: British bitters and pale ales."
    },
    {
        name: "WLP026 Premium Bitter Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [67,70],
        attenuation: 72.5,
        flocculation: "Medium",
        notes: "From Staffordshire England. Mild, but complex estery flavor. High attenuation - ferments strong and dry. Suitable for high gravity beers.  Best for: All English ales including bitters, milds, ESB, Porter, Stout and Barley Wine"
    },
    {
        name: "WLP028 Edinburgh Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [65,69],
        attenuation: 72.5,
        flocculation: "Medium",
        notes: "Malty strong ale yeast. Reproduces complex, malty, flavorful schottish ales. Hop character comes through well.  Best for: Strong Scottish style ales, ESB, Irish Reds"
    },
    {
        name: "WLP029 German Ale/Kolsch",
        lab: "White Labs",
        type: "Ale",
        temp: [66,70],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Great for light beers. Accentuates hop flavors. Slight sulfer flavor will fade with age and leave a clean, lager like ale.  Best for: Kolsch, Altbiers, Pale Ales, Blonde and Honey Ales"
    },
    {
        name: "WPL033 Klassic Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [66,70],
        attenuation: 70,
        flocculation: "Medium",
        notes: "Traditional English Ale style yeast. Produces ester character, and allows hop flavor through. Leaves a slightly sweet malt character in ales.  Best for: Bitters, milds, porters stouts and scottish ale styles."
    },
    {
        name: "WLP036 Dusseldorf Alt Yeast",
        lab: "White Ales",
        type: "Ale",
        temp: [65,69],
        attenuation: 68.5,
        flocculation: "Medium",
        notes: "Traditional Alt yeast from Dusseldorf, Germany. Produces clean, slightly sweet alt beers. Does not accentuate hop flavor like WLP029 does.  Best for: Alt biers, Dusseldorf Alts, German Ales"
    },
    {
        name: "WLP037 Yorkshire Square Ale Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [65,69],
        attenuation: 70,
        flocculation: "High",
        notes: "This yeast produces a malty but well balanced profile. Expect toasty flavors with malt driven esters. Highly flocculent and a good choice for many English ales.  Best for: English pale ales, English brown ales and Mild ales"
    },
    {
        name: "WLP038 Manchester Ale Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [65,70],
        attenuation: 70,
        flocculation: "Medium",
        notes: "op fermenting strain that is good for top-cropping. Moderately flocculent with a clean, dry finish. Low ester profile for producing a balanced English ale.  Best for: English style ales"
    },
    {
        name: "WLP039 Nottinghom Ale Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [66,70],
        attenuation: 77.5,
        flocculation: "Medium",
        notes: "British style of ale yeast with a very dry finish and high attenuation. Medium to low fruit and fusel alcohol production. Good top fermenting yeast for cropping.  Best for: British ales, pale ales, ambers, porters and stouts."
    },
    {
        name: "WLP041 Pacific Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [65,68],
        attenuation: 67.5,
        flocculation: "High",
        notes: "Popular yeast from the Pacific Northwest. Leaves a clear and malty profile. More fruity than WLP002. Suitable for many English and American styles.  Best for: English & American ales including milds, bitters, IPA, porters and English stouts."
    },
    {
        name: "WLP051 California Ale V",
        lab: "White Labs",
        type: "Ale",
        temp: [66,70],
        attenuation: 72.5,
        flocculation: "High",
        notes: "Similar to White Labs California Ale Yeast, but slightly lower attenuation leaves a fuller bodied beer.  Best for: American style Pales, Ambers, Browns, IPAs, American Strong Ale"
    },
    {
        name: "WLP060 American Ale Yeast Blend",
        lab: "White Labs",
        type: "Ale",
        temp: [68,72],
        attenuation: 76,
        flocculation: "Medium",
        notes: "A blend that celebrates WLP001 (California Ale Yeast's) clean, neutral fermentation. This strain is versatile and adds two other yeast strains that are also clean/neutral in flavor to add a bit of complexity - almost a lager like finish. Slight sulfur.  Best for: American ales with clean finish"
    },
    {
        name: "WLP080 Cream Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [65,70],
        attenuation: 77.5,
        flocculation: "Medium",
        notes: "A blend of ale and lager yeast strains that work together to create a clean, light American lager style ale. A pleasing estery aroma may be perceived. Hop flavors and bitterness are slightly subdued. Slight sulfer will be produced during fermentation.  Best for: Cream Ale, Hybrids"
    },
    {
        name: "WLP090 San Diego Super Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [65,68],
        attenuation: 75,
        flocculation: "Very High",
        notes: "A super clean, super-fast fermenting strain. A low ester-producing strain that results in a balanced, neutral flavor and aroma profile. Alcohol-tolerant and very versatile for a wide variety of styles. Similar to California Ale Yeast WLP001 but it generally ferments faster.  Best for: IPAs, American ales"
    },
    {
        name: "WLP099 Super High Gravity Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [69,74],
        attenuation: 82,
        flocculation: "Low",
        notes: "Ferments up to 25% alcohol content. Flavor may vary greatly depending on beer alcohol. English like esters at low gravity, but will become more wine-like as alcohol exceeds 16% ABV. Refer to White Labs web page for tips on fermenting high gravity ales.  Best for: Very high gravity beers and barley wine up to 25% alcohol."
    },
    {
        name: "WLP300 Hefeweizen Ale",
        lab: "White Labs",
        type: "Wheat",
        temp: [68,72],
        attenuation: 74,
        flocculation: "Low",
        notes: "Produces the banana and clove nose traditionally associated with German Wheat beers. Also produces desired cloudy look.  Best for: German style wheat beers. Weiss, Weizen, Hefeweizen"
    },
    {
        name: "WLP320 American Hefeweizen Ale",
        lab: "White Labs",
        type: "Wheat",
        temp: [65,69],
        attenuation: 72.5,
        flocculation: "Low",
        notes: "Produces a much smaller amount of clove and banana flavor than the German Hefeweizen White Labs yeast. Some sulfur, and creates desired cloudy look.  Best for: Oregon style American Hefeweizen"
    },
    {
        name: "WLP351 Bavarian Weizen Yeast",
        lab: "White Labs",
        type: "Wheat",
        temp: [66,70],
        attenuation: 75,
        flocculation: "Low",
        notes: "Former yeast lab W51 strain. Produces a classic German style wheat beer with moderately high, spicy, phenolic overtones reminiscent of cloves.  Best for: Bavarian Weizen and wheat beers."
    },
    {
        name: "WLP380 Hefeweizen IV Ale",
        lab: "White Labs",
        type: "Wheat",
        temp: [67,74],
        attenuation: 76,
        flocculation: "Low",
        notes: "Large clove and phenolic aroma, but with minimal banana flavor. Citrus and apricot notes. Crisp and drinkable, with some sulfur production.  Best for: German style Hefeweizen"
    },
    {
        name: "WLP400 Belgian Wit Ale",
        lab: "White Labs",
        type: "Wheat",
        temp: [67,74],
        attenuation: 76,
        flocculation: "Low",
        notes: "Phenolic and tart. The original yeast used to produce Wit in Belgium.  Best for: Belgian Wit"
    },
    {
        name: "WLP500 Trappist",
        lab: "White Labs",
        type: "Ale",
        temp: [67,74],
        attenuation: 72.5,
        flocculation: "Medium",
        notes: "Distinctive fruitiness and plum characteristics. Excellent for high gravity beers.  Best for: Trappist Ale, Dubbel, Trippel, Belgian Ales phenolic than WLP400 (Belgian Wit Ale) but more spicy. Leaves a little more sweetness and flocculation is higher than WLP400.  Best for: Belgian Wit, Spiced Ale, Wheat Ales and Specialty Beers"
    },
    {
        name: "WLP510 Bastogne Belgian Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [67,70],
        attenuation: 76.5,
        flocculation: "Medium",
        notes: "High gravity Trappist ale yeast. Creates a dry beer with a slightly acidic finish. Cleaner finish and slightly less spicy than WLP500 or WLP530.  Best for: High gravity beers, Belgian ales, Dubbels, Trippels."
    },
    {
        name: "WLP530 Abbey Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [66,72],
        attenuation: 76.5,
        flocculation: "Medium",
        notes: "Clean, almost lager like Belgian ale yeast. Good for Belgian pale and amber ales or with other Belgian yeasts in a blend. Biscuity, ale like aroma present. Hop flavors are accentuated. Slight sulfur during fermentation, and a lager like flavor profile.  Best for: Belgian pale and amber ales"
    },
    {
        name: "WLP540 Abbey IV Ale Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [66,72],
        attenuation: 78,
        flocculation: "Medium",
        notes: "An authentic Trappist style ale yeast. Use for Belgian ales including abbey ales (dubbels, tripels). Fruit character is medium - between WLP500 (high) and WLP530 (low).  Best for: Trappist Belgian Ales, Dubbels, Tripels and Specialty ales"
    },
    {
        name: "WLP545 Belgian Strong Ale Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [68,78],
        attenuation: 81.5,
        flocculation: "Medium",
        notes: "From the Ardennes region of Belgium, this classic strain produces moderate esters and spicy phenolic character. Results in a dry but balanced finish. Use for dark or strong abbey ales.  Best for: Belgian dark strongs, Abbey ales and Christmas beers"
    },
    {
        name: "WLP550 Belgian Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [68,78],
        attenuation: 81.5,
        flocculation: "Medium",
        notes: "Phenolic and spicy flavors. Complex profile, with less fruitiness than White's Trappist Ale strain.  Best for: Belgian Ales, Saisons, Belgian Reds, Belgian Browns, White beers"
    },
    {
        name: "WLP565 Belgian Saison I Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [68,78],
        attenuation: 81.5,
        flocculation: "Medium",
        notes: "Saison yeast from Wallonia. Earthy, spicy and peppery notes. Slightly sweet.  Best for: Saison Ale, Belgian Ale, Dubbel, Trippel"
    },
    {
        name: "WLP566 Belgain Saison II Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [68,78],
        attenuation: 81.5,
        flocculation: "Medium",
        notes: "Saison strain with a more fruity ester profile than WLP565 (Belgian Saison I Yeast). Moderately phenolic with a clove-like characteristic in finished beer flavor and aroma. Ferments quickly.  Best for: Belgian or French Saison"
    },
    {
        name: "WLP568 Belgian Style Saison Ale Yeast Blend",
        lab: "White labs",
        type: "Ale",
        temp: [70,80],
        attenuation: 75,
        flocculation: "Medium",
        notes: "This blend melds Belgian style ale and Saison strains. The strains work in harmony to create complex, fruity aromas and flavors. The blend of yeast strains encourages complete fermentation in a timely manner. Phenolic, spicy, earthy, and clove like flavor.  Best for: Belgian and French Saison"
    },
    {
        name: "WLP570 Belgian Golden Ale",
        lab: "White Labs",
        type: "Ale",
        temp: [68,75],
        attenuation: 75,
        flocculation: "Low",
        notes: "	Combination of fruitiness and phenolic characters dominate the profile. Some sulfur which will dissapate following fermentation.  Best for: Belgian Ales, Dubbel, Grand Cru, Belgian Holiday Ale"
    },
    {
        name: "WLP575 Belgian Style Ale Yeast",
        lab: "White Labs",
        type: "Ale",
        temp: [68,75],
        attenuation: 77,
        flocculation: "Medium",
        notes: "Blend of two trappist ale yeasts and one Belgian ale yeast. Creates a versatile blend to be used for Trappist and other Belgian style ales.  Best for: Trappist and other Belgian ales."
    },
    {
        name: "WLP630 Berliner Weisse Blend",
        lab: "White Labs",
        type: "Wheat",
        temp: [68,72],
        attenuation: 76.5,
        flocculation: "Medium",
        notes: "A blend of a traditional German Weizen yeast and Lactobacillus to create a subtle, tart, drinkable beer. Can take several months to develop tart character. Perfect for traditional Berliner Weisse.  Best for: Berliner Weisse"
    },
    {
        name: "WLP644 Brettanomyces Bruxellensis Trois",
        lab: "White Labs",
        type: "Ale",
        temp: [65,72],
        attenuation: 85,
        flocculation: "Low",
        notes: "This Belgian strain, used traditionally for 100% Brettanomyces fermentations, produces a slightly tart beer with delicate characteristics of mango and pineapple. Can also be used to produce effervescence when bottle-conditioning."
    },
    {
        name: "WLP645 Brettanomyces Claussenii",
        lab: "White Labs",
        type: "Ale",
        temp: [65,72],
        attenuation: 70,
        flocculation: "Medium",
        notes: "Low intensity Brett character. Originally isolated from strong English stock beer, in the early 20th century. The Brett flavors produced are more subtle than WLP650 and WLP653. More aroma than flavor contribution. Fruity, pineapple like aroma.  Best for: Sour ales (in secondary)"
    },
    {
        name: "WLP650 Brettanomyces Bruxellensis",
        lab: "White Labs",
        type: "Ale",
        temp: [65,72],
        attenuation: 70,
        flocculation: "Medium",
        notes: "Medium intensity Brett character. Classic strain used in secondary fermentation for Belgian style beers and lambics. One Trappist brewery uses this strain in secondary fermentation.  Best for: Belgian sour ales and labics (in secondary)"
    },
    {
        name: "WLP653 Brettanomyces",
        lab: "White Labs",
        type: "Ale",
        temp: [65,72],
        attenuation: 70,
        flocculation: "Medium",
        notes: "Use in secondary. High intensity Brett character. Defines the 'Brett character': Horsey, smoky and spicy flavors. As the name suggests, this strain is found most often in Lambic style beers, which are spontaneously fermented beers.  Best for: Lambics and Flanders/Sour Brown ales"
    },
    {
        name: "WLP655 Belgian Sour Mix 1",
        lab: "White Labs",
        type: "Ale",
        temp: [65,72],
        attenuation: 70,
        flocculation: "Medium",
        notes: "Note: Bacteria to use in secondary only. A unique blend perfect for Belgian style beers. Includes Brettanomyces, Saccharomyces, and the bacterial strains Lactobacillus and Pediococcus.  Best for: Belgian sour beers (in secondary)"
    },
    {
        name: "WLP670 American Farmhouse Blend",
        lab: "White Labs",
        type: "Ale",
        temp: [68,72],
        attenuation: 78.5,
        flocculation: "Medium",
        notes: "Inspired by local American brewers crafting semi- traditional Belgian-style ales. This blend creates a complex flavor profile with a moderate level of sourness. It consists of a traditional farmhouse yeast strain and Brettanomyces. Great yeast for farmhoouse ales.  Best for: Saisons, Farmhouse Ales"
    },
    {
        name: "WLP675 Maloactic Bacteria",
        lab: "White Labs",
        type: "Ale",
        temp: [65,72],
        attenuation: 78.5,
        flocculation: "Medium",
        notes: "Bacteria for use in secondary. Malolactic fermentation is the conversion of malic acid to lactic acid by bacteria from the lactic acid bacteria family. Lactic acid is less acidic than malic acid, which in turn decreases acidity and helps to soften and/o Best for: Primarily wine"
    },
    {
        name: "WHLP677 Lactobacillus Bacteria",
        lab: "White Labs",
        type: "Ale",
        temp: [65,72],
        attenuation: 70,
        flocculation: "Medium",
        notes: "Bacteria for use in secondary. This lactic acid bacteria produces moderate levels of acidity and sour flavors found in lambics, Berliner Weiss, sour brown ale and gueze.  Best for: Lambic, Berliner Weiss, Sour Brown and Gueze (secondary)"
    },
    {
        name: "WLP800 Pilsner Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [50,55],
        attenuation: 74.5,
        flocculation: "High",
        notes: "Classic pilsner strain from Czech Republic. Dry with a malty finish.  Best for: European Pilsners, Bohemian Pilsner"
    },
    {
        name: "WLP802 Czech Budejovice Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [50,55],
        attenuation: 77.5,
        flocculation: "Medium",
        notes: "Dry and crisp with low diacetyl production. From Southern Czech Republic.  Best for: Bohemian Style Pilsner"
    },
    {
        name: "WLP810 San Francisco Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [58,65],
        attenuation: 67.5,
        flocculation: "High",
        notes: "Produces 'California Common' style beer.  Best for: California and Premium Lagers, all American Lagers"
    },
    {
        name: "WLP815 Belgian Lager Yeast",
        lab: "White Labs",
        type: "Lager",
        temp: [50,55],
        attenuation: 754,
        flocculation: "Medium",
        notes: "Clean, crisp European lager yeast with low sulfur production. The strain originates from a very old brewery in West Belgium. Great for European style pilsners, dark lagers, Vienna lager, and American style lagers.  Best for: European style pilsners, dark lagers, Vienna lager, and American style lagers"
    },
    {
        name: "WLP820 Octoberfest/Marzen Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [52,58],
        attenuation: 69,
        flocculation: "Medium",
        notes: "Produces a malty, bock style beer. Does not finish as dry or as fast as White's German Lager yeast. Longer lagering or starter recommended.  Best for: Marzen, Oktoberfest, European Lagers, Bocks, Munich Helles"
    },
    {
        name: "WLP830 German Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [50,55],
        attenuation: 76.5,
        flocculation: "Medium",
        notes: "Very malty and clean. One of the world's most popular lager yeasts.  Best for: German Marzen, Pilsner, Lagers, Oktoberfest beers."
    },
    {
        name: "WLP833 German Bock Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [48,55],
        attenuation: 73,
        flocculation: "Medium",
        notes: "Produces beer that has balanced malt and hop character. From Southern Bavaria.  Best for: Bocks, Doppelbocks, Oktoberfest, Vienna, Helles, some American Pilsners"
    },
    {
        name: "WLP838 Southern German Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [50,55],
        attenuation: 72,
        flocculation: "High",
        notes: "Malty finish and balanced aroma. Strong fermenter, slight sulfur and low diacetyl.  Best for: German Pilsner, Helles, Oktoberfest, Marzen, Bocks"
    },
    {
        name: "WLP840 American Lager Yeast",
        lab: "White Labs",
        type: "Lager",
        temp: [50,55],
        attenuation: 77.5,
        flocculation: "Medium",
        notes: "Dry and clean with very slight apple fruitiness. Minimal sulfer and diacetyl.  Best for: All American Style Lagers -- both light and dark."
    },
    {
        name: "WLP860 Munich Helles",
        lab: "White Labs",
        type: "Lager",
        temp: [48,52],
        attenuation: 70,
        flocculation: "Medium",
        notes: "Possible Augustiner Strain? This yeast helps to produce a malty, but balanced traditional Munich-style lager. Clean and strong fermenter, it's great for a variety of lager styles ranging from Helles to Rauchbier.  Best for: Munich Helles, Oktoberfest"
    },
    {
        name: "WLP862 Cry Havoc",
        lab: "White Labs",
        type: "Lager",
        temp: [68,74],
        attenuation: 68,
        flocculation: "Medium",
        notes: "Licensed by White Labs from Charlie Papazian, author of 'The Complete Joy of Home Brewing'. This yeast was used to brew many of his original recipes. Diverse strain can ferment at ale and lager temps.  Best for: All American Style Lagers -- both light and dark."
    },
    {
        name: "WLP885 Zurich Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [50,55],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Swiss style lager yeast. Sulfer and diacetyl production is minimal. May be used for high gravity lagers with proper care.  Best for: Swiss style lager, and high gravity lagers (over 11% ABV)"
    },
    {
        name: "WLP920 Old Bavarian Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [50,55],
        attenuation: 69.5,
        flocculation: "Medium",
        notes: "Southern Germany/Bavarian lager yeast. Finishes malty with a slight ester profile.  Best for: Oktoberfest, Marzen, Bock and Dark Lagers."
    },
    {
        name: "WLP940 Mexican Lager",
        lab: "White Labs",
        type: "Lager",
        temp: [50,55],
        attenuation: 74,
        flocculation: "Medium",
        notes: "From Mexico City - produces a clean lager beer with a crisp finish. Good for mexican style beers.  Best for: Mexican style light and dark lagers."
    },
    {
        name: "American Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [32,32],
        attenuation: 75,
        flocculation: "",
        notes: ""
    },
    {
        name: "1007 German Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [55,66],
        attenuation: 75,
        flocculation: "Low",
        notes: "Crisp, dry finish with a mild flavor.  Best for: German Ales, Alts, Kolsch, Dry Stout"
    },
    {
        name: "1010 American Wheat",
        lab: "Wyeast",
        type: "Wheat",
        temp: [58,74],
        attenuation: 76,
        flocculation: "Low",
        notes: "Dry, Crisp, tart beer in the American Hefeweizen style. Low flocculation aids in producing desired chill haze.  Best for: American Wheat, Berlin Weiss, Hefeweizen"
    },
    {
        name: "1026 British Cask Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [63,72],
        attenuation: 75.5,
        flocculation: "Medium",
        notes: "A great choice for any cask conditioned British Ale. Produces nice malt profile with a hint of fruit. Finishes dry and slightly tart.  Best for: British Ales"
    },
    {
        name: "1028 London Ale Yeast",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,72],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Dry finish, bold, rich flavor, some fruit profile and a crisp finish.  Best for: English Ales, Bitters, IPAs, Brown Ale"
    },
    {
        name: "1056 American ALe",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,72],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Soft, smooth, clean finish. Very well balanced. Very versitile -- works well with many ale styles.  Best for: American Pale Ale, Scottish Ale, Porters, Sweet Stout, Barley Wine, Alt"
    },
    {
        name: "1084 Irish Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [62,72],
        attenuation: 73,
        flocculation: "Medium",
        notes: "Dry diacetyl, fruity flavor characteristic of stouts. Full bodied, dry, clean flavor.  Best for: Irish Dry Stouts, Porter, Scottish Ale, Brown Ale, Imperial Stout, Barley Wine"
    },
    {
        name: "1087 Wyeast Ale Blend",
        lab: "Wyeast",
        type: "Ale",
        temp: [64,72],
        attenuation: 73,
        flocculation: "Medium",
        notes: "Blend of ale strains designed to provide quick starts, good flavor, balance and flocculation. Balanced finish suitable for most American and British ale styles.  Best for: American and British Ale Styles."
    },
    {
        name: "1098 British Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [64,62],
        attenuation: 74,
        flocculation: "Medium",
        notes: "Fruity, tart, dry crisp finish. Very well balanced.  Best for: All British Ales, Pales, Bitters, English Strong Ale"
    },
    {
        name: "1099 Whitbread Ale",
        lab: "Weast",
        type: "Ale",
        temp: [64,75],
        attenuation: 70,
        flocculation: "High",
        notes: "Slightly more fruity and malty than Wyeast's British Ale. Clear and highly flocculant.  Best for: Whitbread Ale, British Ales, Pales, Bitters"
    },
    {
        name: "1187 Ringwood Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [64,74],
        attenuation: 70,
        flocculation: "High",
        notes: "European ale yeast. Highly flocculant with complex, clear, but malty profile. Slightly fruity ester.  Best for: Ringwood Ale, Brown Ales"
    },
    {
        name: "1214 Belgian Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [64,74],
        attenuation: 74,
        flocculation: "Medium",
        notes: "Trappist style ale yeast. Complex estery flavor.  Best for: Belgian Ales, Abbey Ales, Trappist Ales"
    },
    {
        name: "1272 American Ale II",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,72],
        attenuation: 74,
        flocculation: "High",
        notes: "Clean, tart, nutty flavor. More fruity than Wyeast American Ale yeast.  Best for: All American Ales, Brown Ales, Barley Wine"
    },
    {
        name: "1272 GF All American Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,72],
        attenuation: 74,
        flocculation: "High",
        notes: "Popular all purpose American ale style now in a Gluten Free strain. Produces beers that are nutty, clean with a slight tart finish. Ferment warmer to accentuate hops and add fruitiness or ferment cold for clean light citrus character.  Best for: American Amber, Brown, IPA, Pale ales and stouts. Blondes and fruit beers."
    },
    {
        name: "1275 Thames Valley Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [62,72],
        attenuation: 77,
        flocculation: "Medium",
        notes: "Clean, complex flavor. Low in fruit, low in esters, rich in flavor. Hops come through well.  Best for: British Bitters, ESB, India Pale Ale, English Strong Ale"
    },
    {
        name: "1318 London Ale III",
        lab: "Wyeast",
        type: "Ale",
        temp: [64,74],
        attenuation: 73,
        flocculation: "High",
        notes: "Light, fruity flavor. Balanced flavor with hint of sweetness.  Best for: British Ales, Bitters"
    },
    {
        name: "1332 Northwest Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [65,75],
        attenuation: 69,
        flocculation: "High",
        notes: "Classic Northwest US ale yeast. Slight fruit flavor, malty ale with good body and balance.  Best for: Oregon Ales, All American Ale styles"
    },
    {
        name: "1335 British Ale II",
        lab: "Wyeast",
        type: "Ale",
        temp: [63,75],
        attenuation: 74.5,
        flocculation: "High",
        notes: "Malty, clean, crisp finish. Dry flavor.  Best for: British and Canadian Ales, English Bitters"
    },
    {
        name: "1338 European Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [62,72],
        attenuation: 69,
        flocculation: "High",
        notes: "Very malty flavor characteristic of Bavarian/Munich Ales. Complex character.  Best for: European Ales, German Ales, Alts, Pale Ale, Brown Ale, Kolsch"
    },
    {
        name: "1388 Belgian Strong Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [65,75],
        attenuation: 76,
        flocculation: "Low",
        notes: "Dry, tart, fruity flavor. High alcohol tolerance.  Best for: Belgian Ales, Scottish Strong Ale,Trappist Ales, Dubbels, Trippels"
    },
    {
        name: "1450 Denny's Favorite 50",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,70],
        attenuation: 75,
        flocculation: "Low",
        notes: "This terrific all-round yeast can be used for almost any beer style, and is a mainstay of one of our local homebrewers, Mr. Denny Conn. It is unique in that it produces a big mouthfeel and accentuates the malt, caramel, or fruit character of a beer without being sweet or under-attenuated.  Best for: almost any style"
    },
    {
        name: "1728 Scottish Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,70],
        attenuation: 75,
        flocculation: "High",
        notes: "High alcohol tolerance.  Best for: Scottish Ale, Scottish Strong Ales, Sweet Stout, Imperial Stout, Barley Wine"
    },
    {
        name: "1762 Belgian Abbey II",
        lab: "Wyeast",
        type: "Ale",
        temp: [65,75],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Dry flavor with slight fruitiness. High alcohol tolerance.  Best for: Belgian Ales, Trappist Ales, Abbey Ales"
    },
    {
        name: "1968 London ESB Ale",
        lab: "Wyeast",
        type: "Ale",
        temp: [64,72],
        attenuation: 69,
        flocculation: "High",
        notes: "Malty, balanced flavor. Fruity, rich finish. Excellent for cask conditioned ales and bitters.  Best for: English Bitters, IPA, Brown Ales, Mild Ales"
    },
    {
        name: "2000 Budvar Lager",
        lab: "Weast",
        type: "Lager",
        temp: [46,56],
        attenuation: 73,
        flocculation: "High",
        notes: "Classic pilsner lager yeast. Malty nose and subtle fruit. Rich malt profile, but dry crisp finish. Hop character accentuated by dry finish.  Best for: Bohemian Pilsner, Classic Pilsners, Dortmunder and Light Lagers"
    },
    {
        name: "2001 Urquell Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [48,58],
        attenuation: 74,
        flocculation: "Medium",
        notes: "Pilsner Urquell yeast with mild fruit/floral aroma. Very dry and clean on palate with full mouth feel. Subtle malt character. Clean and neutral finish.  Best for: Bohemian Pilsner"
    },
    {
        name: "2007 Pilsen Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [48,56],
        attenuation: 73,
        flocculation: "Medium",
        notes: "Classic American pilsner strain. Smooth with a malty flavor. Dry and crisp fermentation.  Best for: American Pilsner, Bohemian Pilsner, Light Lagers"
    },
    {
        name: "2035 American Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [48,58],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Bold, with a complex aroma. Good flavor depth characteristics for a wide variety of lager beers.  Best for: American Lagers and Pilsners"
    },
    {
        name: "2042 Danish Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [46,56],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Rich, Dortmund style, with a crisp, dry finish. Soft profile accentuates hop flavor.  Best for: Dortmund/Export Lagers"
    },
    {
        name: "2112 California Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [58,68],
        attenuation: 69,
        flocculation: "High",
        notes: "Suited for 19th century California style beers. Lagers at high temperature and produces malty, clear beers.  Best for: California common beers, Steam Beer"
    },
    {
        name: "2124 Bohemian Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [48,58],
        attenuation: 71,
        flocculation: "Medium",
        notes: "Ferments clean and malty, with rich malty flavor for full gravity pilsners.  Best for: Bohemian Pilsners, Pilsners, German Helles, Bocks"
    },
    {
        name: "2178 Wyeast Lager Blend",
        lab: "Wyeast",
        type: "Lager",
        temp: [48,58],
        attenuation: 73,
        flocculation: "Medium",
        notes: "Blend of lager strains to produce a complex but clean lager flavor profile. Suitable for many common lager styles.  Best for: Classic Pilsners, Lagers, Bocks."
    },
    {
        name: "2206 Bavarian Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [46,58],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Use by many German breweries. Produces a full-bodied, rich, malty beer.  Best for: German Bocks, Vienna, Oktoberfest, Hells, Marzens, Dunkel"
    },
    {
        name: "2247 European Lager II",
        lab: "Wyeast",
        type: "Lager",
        temp: [46,56],
        attenuation: 75,
        flocculation: "Low",
        notes: "Clean, dry flavor profile for aggressively hopped pilsners. Dry finish, mild aroma, slight sulfur production.  Best for: Bohemian Pilsner, American Pilsner, Helles, Dunkel"
    },
    {
        name: "2272 North American Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [48,56],
        attenuation: 73,
        flocculation: "High",
        notes: "American and Canadian lager yeast. Malty finish makes it suitable for Marzens/Oktoberfest as well.  Best for: American Pilsner, California Common, Canadian Lager, Oktoberfest, Marzen"
    },
    {
        name: "2278 Czech Pilsner Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [50,58],
        attenuation: 72,
        flocculation: "Medium",
        notes: "Classic Pilsner strain. Creates a dry but malty finish. Perfect for Pilsners and bocks. Some sulfur produced, but will fade with time.  Best for: Bohemian and American Pilsner, Bocks, Oktoberfest, Marzen"
    },
    {
        name: "2308 Munich Lager",
        lab: "Wyeast",
        type: "Lager",
        temp: [48,56],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Unique Pilsner strain. Very smooth, well-rounded and full bodied. Benefits from a diacetyl rest.  Best for: Pilsners, Light Lagers, Dortmond/Export, Marzen/Oktoberfest, Dunkel"
    },
    {
        name: "2565 Kolsch",
        lab: "Wyeast",
        type: "Lager",
        temp: [56,64],
        attenuation: 75,
        flocculation: "Low",
        notes: "Very malty flavor with mix of lager and ale character. Crisp, clean finish.  Best for: Kolsch, European Ales"
    },
    {
        name: "2633 Octoberfest Lager Blend",
        lab: "Wyeast",
        type: "Lager",
        temp: [48,58],
        attenuation: 75,
        flocculation: "Low",
        notes: "This blend of lager strains is designed to produce a rich, malty, complex and full bodied Octoberfest style beer. It attenuates well while leaving plenty of malt character and mouthfeel. This strain is low in sulfur production.  Best for: Octoberfest, Marzen, Bavarian lagers"
    },
    {
        name: "3056 Bavarian Wheat",
        lab: "Wyeast",
        type: "Wheat",
        temp: [64,74],
        attenuation: 75,
        flocculation: "Medium",
        notes: "Blend of top-fermenting ale and wheat yeasts providing a mild ester and phenolic profile.  Best for: Bavarian style wheat beers."
    },
    {
        name: "3068 Weihenstephan Weizen",
        lab: "Wyeast",
        type: "Wheat",
        temp: [64,75],
        attenuation: 75,
        flocculation: "Low",
        notes: "Unique Bavarian wheat yeast that produces the spicy weizen clove and banana flavor. Best when fermented at around 68 deg F.  Best for: Bavarian Weizen"
    },
    {
        name: "3112 Brettanomyces Bruxellensis",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,75],
        attenuation: 67,
        flocculation: "Medium",
        notes: "Wild yeast strain isolated from Brussels region of Belgium. Adds classic sweaty horse hair flavor as well as sourness and cherry-pie like flavor. Generally used in conjunction with S. Cerevisiae after the primary fermentation has begun. Requires 3-6 mo  Best for: Belgian Lambic, Gueze Lambic, and Sour Browns"
    },
    {
        name: "3278 Belgian Lambic Blend",
        lab: "Wyeast",
        type: "Ale",
        temp: [63,75],
        attenuation: 70,
        flocculation: "Low",
        notes: "Lambic culture of Saccharomyces Cerevisiar and a mixture of yeasts and bacterias. Blend of organisms helps create lactic flavor of Belgian Lambics.  Best for: Belgian Lambic"
    },
    {
        name: "3333 German Wheat",
        lab: "Wyeast",
        type: "Wheat",
        temp: [63,75],
        attenuation: 74,
        flocculation: "High",
        notes: "Subtle flavor profile. Sharp, fruity, crisp, sherry like flavor.  Best for: Bavarian Weizen"
    },
    {
        name: "3463 Forbidden Fruit",
        lab: "Wyeast",
        type: "Wheat",
        temp: [63,76],
        attenuation: 74,
        flocculation: "Low",
        notes: "Phenolic profile with subdued fruitiness. Available seasonally.  Best for: Belgian Wit, Grand Cru"
    },
    {
        name: "3522 Belgian Ardennes",
        lab: "Wyeast",
        type: "Wheat",
        temp: [65,85],
        attenuation: 74,
        flocculation: "High",
        notes: "Phenolics develop at increased temperature. Mild fruitiness and complex spicy flavor.  Best for: Belgian Ale"
    },
    {
        name: "3638 Bavarian Wheat",
        lab: "Wheat",
        type: "Wheat",
        temp: [64,75],
        attenuation: 73,
        flocculation: "Low",
        notes: "Hefeweizen yeast with complex flavor and aroma. Bubble gum, banana flavors with apple/plub ester profile. Malty flavor.  Best for: Bavarian Weizen, Hefeweizen"
    },
    {
        name: "3711 French Saison",
        lab: "Wyeast",
        type: "Ale",
        temp: [65,77],
        attenuation: 80,
        flocculation: "Medium",
        notes: "A very versatile strain that produces Saison or farmhouse style biers as well as other Belgian style beers that are highly aromatic (estery), peppery, spicy and citrusy. This strain enhances the use of spices and aroma hops, and is extremely attenuative Best for: French and Belgian Saison or Farmhouse ales"
    },
    {
        name: "3724 Belgian Saison",
        lab: "Wyeast",
        type: "Ale",
        temp: [70,95],
        attenuation: 78,
        flocculation: "Low",
        notes: "Classic farmhouse ale yeast. Spicy, complex aromatics including bubble gum. Tart and dry on the palate with mild fruitiness. Finishes crisp and mildly acidic. Ferment at warm temperature. May have vigorous fermentation start.  Best for: Belgian Saison beer"
    },
    {
        name: "3763 Roselare Belgian Blend",
        lab: "Wyeast",
        type: "Ale",
        temp: [55,80],
        attenuation: 80,
        flocculation: "Medium",
        notes: "Culture of Saccharomyces, Brettonomyces and Lactic Acid Bacteria. Complex aromas and flavors. May be used for primary fermentation. Primarily for sour brown and red Belgian styles.  Best for: Belgian sour brown and red beers."
    },
    {
        name: "3787 Trappish High Gravity",
        lab: "Wyeast",
        type: "Wheat",
        temp: [64,78],
        attenuation: 76,
        flocculation: "Medium",
        notes: "Robust top cropping yeast. Phenolic character and alcohol tolerance up to 12%. Rich ester profile and malty flavor.  Best for: Belgian Wit, Trappist Ale, High gravity ales"
    },
    {
        name: "3942 Belgian Wheat",
        lab: "Wyeast",
        type: "Wheat",
        temp: [64,74],
        attenuation: 74,
        flocculation: "Medium",
        notes: "Estery lor phenol yeast. Plum and apple aroma with a dry finish.  Best for: Belgian Wheat, Bavarian Weizen"
    },
    {
        name: "3944 Belgian Witbir",
        lab: "Wyeast",
        type: "Wheat",
        temp: [62,75],
        attenuation: 74,
        flocculation: "Medium",
        notes: "Tart, slightly phenolic character. For Wits and Grand Cru. Tolerates high gravity beers well.  Best for: Belgian Wit, Grand Cru"
    },
    {
        name: "4335 Lactobacillus Delbrueckii",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,95],
        attenuation: 67,
        flocculation: "Medium",
        notes: "Lactic acid bacteria isolated from Belgium. Produces mild acidity and sourness found in many types of Belgian beers. Always used in conjunction with S. Cerevisiae and wild yeasts.  Best for: Belgian gueze, lambic, sour brown ales, and Berliner Weisse."
    },
    {
        name: "4733 Pediococcus Cerevisiae",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,95],
        attenuation: 67,
        flocculation: "Medium",
        notes: "Lactic acid bacteria isolated from Belgium. Creates a high level of lactic acidity over a long time. Often used with other yeasts, and it may take several months for flavor to fully develop.  Best for: Gueze and other Belgian styles."
    },
    {
        name: "5112 Brettanomyces Bruxellensis",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,75],
        attenuation: 67,
        flocculation: "Medium",
        notes: "This strain of wild yeast was isolated from brewery cultures in the Brussels region of Belgium. It produces the classic sweaty horse blanket character and may form a pellicle in bottles or casks. The strain is generally used in conjunction with S. cerevis  Best for: Gueuze, Lambics and Sour Browns"
    },
    {
        name: "5335 Lactobacillus",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,95],
        attenuation: 80,
        flocculation: "Medium",
        notes: "Lactic acid bacteria isolated from a Belgian brewery. This culture produces moderate levels of acidity and is commonly found in many types of beers including gueuze, lambics, sour brown ales and Berliner Weisse. It is always used in conjunction with S.cer  Best for: Belgian sout beers (secondary)"
    },
    {
        name: "5526 Brettanomyces Lambucus",
        lab: "Wyeast",
        type: "Ale",
        temp: [60,75],
        attenuation: 80,
        flocculation: "Very High",
        notes: "This is a wild yeast strain isolated from Belgian lambic beers. It produces a pie cherry-like flavor and sourness with a distinct Brett character. A pellicle may form in bottles or casks. This strain works best in conjunction with other yeast and lactic b  Best for: Lambic"
    },
    {
        name: "5733 Pediocuccus",
        lab: "Wyeast",
        type: "Ale",
        temp: [65,95],
        attenuation: 80,
        flocculation: "Medium",
        notes: "Lactic acid bacteria used in the production of Belgian style beers where additional acidity is desirable. Often found in gueuze and other Belgian style beer. Acid production will increase with storage time. It may also cause ropiness and produce low level Best for: Belgian sour ales"
    },
]
module.exports = seed_yeast;