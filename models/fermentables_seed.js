let seed_fermentables = [
    {
        name: "Acid Malt",
        potential:	1.027,
        color: 3,
        description: "Acid malt contains acids from natural lactic acids. Used by German brewers to adjust malt PH without chemicals to adhere to German purity laws. Also enhances the head retention",
    },
    {
        name: "Acidulated",
        potential: 1.027,
        color: 1.8,
        description: "Used in Germany to lower PH levels without resorting to chemicals. Lowers mash pH levels, lightens color, improves flavor stability."
    },
    {
        name: "Acidulated Malt",
        potential: 0.000,
        color: 3.4,
        description: ""
    },
    {
        name: "Amber Malt",
        potential: 1.035,
        color: 22,
        description: "1.035"
    }, 
    {
        name: "Aromatic Malt",
        potential: 1.036,
        color: 26,
        description: "	Provides a very strong malt flavor and aroma to your beer."
    },     
    {
        name: "Barley, Flaked",
        potential: 1.032,
        color: 1.7,
        description: "Adds significant body to Porters and Stouts. High haze producing protein prevents use in light beers."
    }, 
    {
        name: "Barley, Raw",
        potential: 1.028,
        color: 2,
        description: "Raw, unmalted barley can be used to add body to your beer. Use in homebrew requires very fine milling combined with a decoction or multi-stage mash. Performs best when used in small quantities with well modified grains."
    },   
    {
        name: "Barley, Roasted",
        potential: 1.025,
        color: 300,
        description: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor."
    },   
    {
        name: "Barley, Torrefied",
        potential: 1.036,
        color: 1.7,
        description: "Raw barley that has been 'popped' open to open kernels Used in place of raw barley for faster conversion and higher yields. High in haze producing protein"
    },   
    {
        name: "Belgian Debittered Black Malt",
        potential: 1.010,
        color: 550,
        description: ""
    },   
    {
        name: "Biscuit Malt",
        potential: 1.036,
        color: 23,
        description: "Use for English ales, brown ales and porters. Adds a biscuit like flavor and aroma. Can be used as a substitute for toasted malt."
    },  
    {   
        name: "Black (Patent) Malt",
        potential: 1.025,
        color: 500,
        description: "ark color and dry roasted flavor characteristic of Stouts and Porters Use for: Coloring in small amounts, or flavoring of Stouts and Porters in larger amounts."
    },   
    { 
        name: "Black Barley (Briess)",
        potential: 1.032,
        color: 500,
        description: ""
    },
    {
        name: "Black Barley (Stout)",
        potential: 1.025,
        color: 500,
        description: "Unmalted barley roasted at high temperature to create a dry, coffee like flavor. Imparts a sharp acrid flavor characteristic of dry stouts. Gives 'dryness' to a stout or porter -- much more so than regular Roasted Barley"
    },    
    {
        name: "Blackprinz Malt",
        potential: 1.025,
        color: 500,
        description: "Dark color and dry roasted flavor characteristic of Stouts and Porters Use for: Coloring in small amounts, or flavoring of Stouts and Porters in larger amounts."
    },    
    {
        name: "Blackprinz Malt (Briess)",
        potential: 1.033,
        color: 500,
        description: "Dehusked Black Malt, similar to Weyermann CARAFA® Special. Very delicate roasted flavors. No astrigent or bitter aftertaste. Color: 500 L"
    },    
    {
        name: "Brewers Malt 6-Row (Briess)",
        potential: 1.036,
        color: 1.8,
        description: "Flavor:Mild Grainy Malty More husk than 2-row, well suited for high adjunct brewing"
    },    
    {
        name: "British Crystal 50-60L",
        potential: 0,
        color: 55,
        description: ""
    },    
    {
        name: "Brown Malt",
        potential: 1.032,
        color: 65,
        description: "Imparts a dry, biscuit flavor. Used in nut brown ales, porters and some Belgian ales."
    },    
    {
        name: "Brumalt",
        potential: 1.033,
        color: 23,
        description: "Dark German malt developed to add malt flavor of Alt, Marzen and Oktoberfest beers. Helps create authentic maltiness without having to do a decoction mash. Rarely available for homebrewers."
    },    
    {
        name: "Cara-Pils/Dextrine",
        potential: 1.033,
        color: 2,
        description: "Significantly increases foam/head retention and body of the beer. Also sold under the names 'Dextrine' and Cara-Foam'"
    },    
    {
        name: "Caraamber",
        potential: 1.035,
        color: 30,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    },    
    {
        name: "Caraaroma",
        potential: 1.035,
        color: 130,
        description: "Very dark crystal malt - similar to a crystal 120 or Caramunich 120 malt. Adds strong caramel flavor, red color, and malty aroma."
    },    
    {
        name: "Carafa I",
        potential: 1.032,
        color: 337,
        description: "Used to intensify aroma and color in dark, Munich beers and stouts."
    },    
    {
        name: "Carafa I (Weyermann)	",
        potential: 1.036,
        color: 320,
        description: "Chocolate malt. Dark beers, Alts, Bockbiers. Adds color and aroma."
    },    
    {
        name: "Carafa II",
        potential: 1.032,
        color: 412,
        description: "Used to intensify aroma and color in dark, Munich beers and stouts."
    },    
    {
        name: "Carafa III",
        potential: 1.032,
        color: 525,
        description: "Dark color and aroma - used in some German beers"
    },    
    {
        name: "Carafa Special I (Weyermann)",
        potential: 1.036,
        color: 320,
        description: "Chocolate malt. Dark beers, Alts, Bockbiers. Adds color and aroma. De-husked, smoother tasting"
    },    
    {
        name: "Carafa Special II (Weyermann)",
        potential: 1.036,
        color: 415,
        description: "De-husked chocolate malt for a smoother flavor. Adds body, color, aroma. Dark beers, Alts, Bockbiers"
    },    
    {
        name: "Carafoam",
        potential: 1.033,
        color: 2,
        description: "Significantly increases foam/head retention and body of the beer. Also sold under the names 'Dextrine' and 'Cara-Pils (TM)'"
    },    
    {
        name: "CaraHell",
        potential: 0,
        color: 11,
        description: ""
    },    
    {
        name: "Caramel / Crystal 60L",
        potential: 0,
        color: 60,
        description: ""
    },    
    {
        name: "Caramel Malt - 120L (Briess)",
        potential: 1.032,
        color: 120,
        description: "Pronounced Caramel, Burnt Sugar, Raisiny, Prunes Deep Red Color 3-15% in Amber &Red beers. 10-15% in Bock 7-15% in Dark beers 10-15% in Porter &Stout"
    },    
    {
        name: "Caramel Malt - 80L 6-Row (Briess)",
        potential: 1.033,
        color: 80,
        description: "Pronounced Caramel, Slight Burnt Sugar, Raisniny, PruneRed to Deep Red3-15% in Amber and Red beers.10-15% in Bock beers.7-15% in Dark beers.10-15% in Porter and Stout."
    },    
    {
        name: "Caramel Wheat Malt",
        potential: 1.035,
        color: 46,
        description: "Caramel wheat malt - emphasizes wheat malt aroma and adds color to the beer. Popular for Dunkelweizens. Also known as Carawheat -- which is a registered trademark of Wyermann Malting."
    },    
    {
        name: "Caramel/Crystal Malt - 10L",
        potential: 1.035,
        color: 10,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    },   
    {
        name: "Caramel/Crystal Malt - 150L",
        potential: 1.035,
        color: 150,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    },   
    {
        name: "Caramel/Crystal Malt - 15L",
        potential: 1.035,
        color: 15,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    }, 
    {
        name: "Caramel/Crystal Malt - 20L",
        potential: 1.035,
        color: 20,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    }, 
    {
        name: "Caramel/Crystal Malt - 30L",
        potential: 1.035,
        color: 30,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    }, 
    {
        name: "Caramel/Crystal Malt - 40L",
        potential: 1.034,
        color: 40,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    }, 
    {
        name: "Caramel/Crystal Malt - 60L",
        potential: 1.034,
        color: 60,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    }, 
    {
        name: "Caramel/Crystal Malt - 80L",
        potential: 1.034,
        color: 80,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    }, 
    {
        name: "Caramel/Crystal Malt - 90L",
        potential: 1.034,
        color: 90,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    },
    {
        name: "Caramel/Crystal Malt - 120L",
        potential: 1.033,
        color: 120,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    },  
    {
        name: "Caramunich I (Weyermann)",
        potential: 1.036,
        color: 35,
        description: "German crystal malt. Adds maltiness, flavor, color and aroma.v"
    },    
    {
        name: "Caramunich III (Weyermann)",
        potential: 1.037,
        color: 71,
        description: "German crystal malt. Adds maltiness, body, aroma and color."
    },    
    {
        name: "Caramunich Malt",
        potential: 1.033,
        color: 56,
        description: "Caramel, copper colored malt. Used in Belgian ales and German bocks."
    },    
    {
        name: "Carapils (Briess)",
        potential: 1.034,
        color: 1.5,
        description: "FLAVOR: None COLOR: None ITEM NUMBERS AND PACKAGING OPTIONS adds body, foam retention, and beer stability without influencing color or flavor. non-fermentables to balance body and flavor of dark beers Low usage of 1-5% will help achieve desired resu"
    },    
    {
        name: "Carapils 6-Row (Briess)",
        potential: 1.034,
        color: 1.3,
        description: "	FLAVOR: NoneCOLOR: NoneITEM NUMBERS AND PACKAGING OPTIONSadds body, foam retention, and beer stability without influencing color or flavor.non-fermentables to balance body and flavor of dark beersLow usage of 1-5% will help achieve desired resu"
    },    
    {
        name: "Carared",
        potential: 1.035,
        color: 1.3,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    },    
    {
        name: "CHÂTEAU SPELT",
        potential: 1.000,
        color: 3.55,
        description: "Features: Château Spelt is a pale, well-modified type of malt. Made from a hard-grained species of wheat (heirloom wheat), it has a higher protein level when compared to other wheat malts. Characteristics: Château Spelt malt imparts a sweet nutty flavor, adds a spicy aroma and an earthy character to your beer. Great for Belgian Saison and Wheat beer styles. Usage: Belgian saison, wheat beers, special beers. 3 –7 EBC (European Brewing Convention) 1.7 –3.2 °L (Lovibond) Moisture % 6.0 Extract (dry basis) % 79 Wortcolour EBC (°L) 3 (1.7) -7 (3.2) Total Protein (dry malt) % 17.0"
    },
    {
        name: "Chocolate (Briess)",
        potential: 1.035,
        color: 350,
        description: "FLAVOR: Rich Roasted Coffee COLOR: Brown Hues, depending upon usage color adj with minor/no flavor contribution 1-10% for color in Porter &Stout The choc flavor is very complementary when used in higher % in Brown Ales, Porters, Stouts & other Dark"
    },    
    {
        name: "Chocolate (Dingemans)",
        potential: 1.030,
        color: 340,
        description: ""
    },    
    {
        name: "Chocolate Malt",
        potential: 1.028,
        color: 350,
        description: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt."
    },    
    {
        name: "Chocolate Malt",
        potential: 1.034,
        color: 450,
        description: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt."
    },    
    {
        name: "Chocolate Malt (Muntons)",
        potential: 1.028,
        color: 385,
        description: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt."
    },    
    {
        name: "Chocolate Malt (Thomas Fawcett)",
        potential: 1.034,
        color: 508,
        description: "Dark chocolate malt from the UK. Adds strong coffee flavor to your beer."
    },    
    {
        name: "Chocolate Malt, Pale",
        potential: 1.031,
        color: 250,
        description: "Primarily used for color and aroma in top-fermented specialty beers."
    },    
    {
        name: "Chocolate Wheat Malt",
        potential: 1.033,
        color: 400,
        description: "Intensifies aroma and color in top-fermented beers such as dark wheat beers."
    },    
    {
        name: "Corn - Yellow, Flaked (Briess)",
        potential: 1.039,
        color: 1.3,
        description: "produce a beer with a mild, less malty flavor produce a drier, more crisp beer. APPLICATIONS Use up to 40% as a cereal adjunct in the total grist"
    },    
    {
        name: "Corn, Flaked",
        potential: 1.037,
        color: 1.3,
        description: "Generally a neutral flavor, used to reduce maltiness of beer Produces beer with a milder, less malty flavor Uses: Primarily for light Bohemian and Pilsner lagers"
    },    
    {
        name: "Crisp Crystal 77L",
        potential: 1.034,
        color: 77,
        description: "Adds body, color and improves head retention. Also called 'Crystal' malt."
    },    
    {
        name: "Crystal 40, 2-Row, (Great Western)",
        potential: 1.032,
        color: 40,
        description: "Crystal 40 (35-45°L)A fully modified and saccharified two-row crystal malt roasted to a target color of 40° ASBC. A versatile malt providing moderate color and caramel flavor."
    },    
    {
        name: "Crystal 60, 2-Row, (Great Western)",
        potential: 1.032,
        color: 60,
        description: "Crystal 60 (55-65°L) Similar to C40 but with a more extensive roasting to a target color of 60° ASBC. Has a more pronounced caramel flavor to coincide with the color."
    },    
    {
        name: "Crystal 60L",
        potential: 0,
        color: 60,
        description: ""
    },    
    {
        name: "Crystal 70/80L",
        potential: 1.034,
        color: 75,
        description: ""
    },    
    {
        name: "Crystal Malt - 60L (Thomas Fawcett)",
        potential: 1.034,
        color: 60,
        description: "Caramel or crystal malt from Thomas Fawcett. Adds Toffee caramel flavor. Improves head retention and body."
    },    
    {
        name: "Crystal, Dark (Simpsons)",
        potential: 1.035,
        color: 80,
        description: "Contributes a strong reddish hue to milds, brown ales, and other dark beers. The long kilning of this malt imparts a roasty edge on top of the malty sweetness of a crystal malt."
    },    
    {
        name: "Crystal, Extra Dark (Simpsons",
        potential: 1.035,
        color: 160,
        description: "Very dark English crystal malt with deep amber color and burnt sugar and dark fruit flavors."
    },    
    {
        name: "Crystal, Medium (Simpsons)",
        potential: 1.035,
        color: 55,
        description: "Versatile English crystal malt imparts a rich gold to copper-red color and caramel flavor and increases foam stability."
    },    
    {
        name: "English Crystal, 50-60 L",
        potential: 1.034,
        color: 55,
        description: ""
    },   
    {
        name: "Floor-Malted Bohemian Pilsner",
        potential: 0,
        color: 1.8,
        description: ""
    },   
    {
        name: "Golden Promise (Simpsons)",
        potential: 1.038,
        color: 2,
        description: "Great base malt that produces a sweet and clean wort. An integral ingredient in Scottish ales and lagers."
    },   
    {
        name: "Home Toasted/Roasted Munich Malt",
        potential: 1.033,
        color: 27,
        description: "Toasted in oven at 350 degrees for 30 minutes"
    },   
    {
        name: "Honey Malt",
        potential: 1.037,
        color: 25,
        description: "Intensely sweet - adds a sweet malty flavor sometimes associated with honey. Also called Brumalt."
    },   
    {
        name: "Honey Malt (Gambrinus)",
        potential: 1.038,
        color: 25,
        description: "This malt is similar in style to German “brumalt”, but it really doesn’t compare to any other malt with its honey-like taste and residual sweetness. Best used in brown ales, porters, and stouts."
    },   
    {
        name: "Kolsch Malt",
        potential: 1.037,
        color: 4.5,
        description: "For brewing Kolsch-type beers. This malt is produced only in the Cologne region of Germany."
    },   
    {
        name: "Lager Malt",
        potential: 1.038,
        color: 2,
        description: "Very light lager malt used to make Pilsners, Lagers and other light beers. May be used as a base malt."
    },   
    {
        name: "Light Roasted Barley (Briess)",
        potential: 1.033,
        color: 300,
        description: "FLAVOR: Coffee, Intense Bitter COLOR: Red to Deep Brown Use 3-7% for coffee flavor in Porter and Stout Use 2-5% in Nut Brown Ales. Use Chocolate Malt or Black Malt in combination with Roasted Barley to obtain desired color."
    },   
    {
        name: "Maris Otter (Crisp)",
        potential: 1.038,
        color: 4,
        description: "Premium base malt from the UK. Popular for many English styles of beer including ales, pale ales and bitters."
    },   
    {
        name: "Maris Otter Malt (Muntons)",
        potential: 1.036,
        color: 3,
        description: "Muntons Maris Otter malt is a 2-row winter variety of barley specially bred for use in the brewing industry. It has a low nitrogen content and high quality malt characteristics which give beers a lush, full flavor profile. It is generally regarded as having a more rich maltiness than standard American 2-row varieties that have been bred specifically for yield. Plump kernels with good husks for filtration, Maris Otter has a breadiness that goes well in British style ales, but may be used in any recipe where more malt character and a more rounded flavor are desired."
    },   
    {
        name: "Melanoiden Malt",
        potential: 1.037,
        color: 20,
        description: "	Aromatic malt from Banberg, Germany. Promotes a full flavor and rounds off beer color. Promotes deep red color and malty flavor."
    },   
    {
        name: "Melanoidin (Weyermann)",
        potential: 1.037,
        color: 27,
        description: "Red colored malt that improved head retention and stability. Used in red lagers, ales, dark beers. Intense red colour and malty aroma."
    },   
    {
        name: "MFB Pilsen",
        potential: 1.036,
        color: 1.8,
        description: ""
    },   
    {
        name: "Mild Malt",
        potential: 1.037,
        color: 4,
        description: "Also called 'English Mild' - a light specialty malt used in Brown Ales"
    },   
    {
        name: "Munich (BestMälz)",
        potential: 1.035,
        color: 7,
        description: "BEST Munich intensifies the color of the beer. It emphasizes the malt aroma of dark beer in an exciting way. It forms an excellent enzyme-rich foundation for all color-intensive beer styles. This malt is produced using a special malting process designed to bring out certain desirable qualities, such as high solubility."
    },   
    {
        name: "Munich 10L (Briess)",
        potential: 1.035,
        color: 10,
        description: "FLAVOR: Robust MaltyCOLOR: Golden to Orange HuesAdds a pronounced malty flavor without adding non-fermentables or affecting foam.Small amounts added to the grist will improve the malty flavor and give a richer color to low gravity brews."
    },   
    {
        name: "Munich Dark (BestMälz)",
        potential: 1.035,
        color: 12,
        description: "	BEST Munich Dark gives a pleasant full-bodied and malty flavor. The impact when using this darker malt is similar to BEST Munich: the color is even more intensified, the malt aroma is strengthened. Enzyme richness of this malt offers opportunities for brewing strongly colored beers. The production process for this malt is similar to the lighter variant of our BEST Munich."
    },   
    {
        name: "Munich I (Weyermann)",
        potential: 1.038,
        color: 7,
        description: "Light Munich malt. May be used as a base for many German beer styles. Fest beers, bocks, ales. Enhances malty flavour and aroma"
    },   
    {
        name: "Munich Malt",
        potential: 1.037,
        color: 9,
        description: "Malty-sweet flavor characteristic and adds a reddish amber color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
    },   
    {
        name: "Munich Malt (Great Western",
        potential: 1.037,
        color: 9,
        description: "This mellow kilned malt is ideal where unique malt flavor and rich aroma, is sought."
    },   
    {
        name: "Munich Malt - 10L",
        potential: 1.035,
        color: 10,
        description: "Malty-sweet flavor characteristic and adds a slight orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
    },   
    {
        name: "Munich Malt - 20L",
        potential: 1.035,
        color: 20,
        description: "Malty-sweet flavor characteristic and adds a orange to deep orange color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
    },   
    {
        name: "Munich Malt, Light (Weyermann)",
        potential: 1.037,
        color: 5.5,
        description: "Malty-sweet flavor characteristic and adds a reddish amber color to the beer. Does not contribute signficantly to body or head retention. Use for: Bock, Porter, Marzen, Oktoberfest beers"
    },
    {
        name: "Oats, Flaked",
        potential: 1.037,
        color: 1,
        description: "Adds body, mouth feel and head retention to the beer Used in oatmeal stouts and porters Adds substantial protein haze to light beers Protein rest recommended unless flakes are pregelatinized"
    },     
    {
        name: "Oats, Flaked (toasted)",
        potential: 1.037,
        color: 15,
        description: "	Adds body, mouth feel and head retention to the beer Used in oatmeal stouts and porters Adds substantial protein haze to light beers Protein rest recommended unless flakes are pregelatinized"
    },     
    {
        name: "Oats, Golden Naked (Simpsons)",
        potential: 1.032,
        color: 10,
        description: "	This unique product from Simpsons has a special, sweet berry-nut flavor. Used at a rate of 4-15% of total grist by weight, Golden Naked Oats will deliver a deep golden hue with light caramel flavors to the finished beer as well as a creamy, satin finish."
    },     
    {
        name: "Oats, Malted",
        potential: 1.037,
        color: 1,
        description: "Malted oats. Adds body, mouth feel and head retention to the beer Creates chill haze in lighter beers, so is primarily used in dark ones."
    },     
    {
        name: "Pale Ale Malt",
        potential: 1.036,
        color: 3.5,
        description: "	A US alternative to British or Belgian pale ale malts. Slightly darker than 2-row. Yields richer, maltier flavors than standard 2-row."
    },     
    {
        name: "Pale Ale Malt 2-Row (Briess)",
        potential: 1.037,
        color: 3.5,
        description: "Flavor:MaltyColor Golden HuesCan be used as a base malt.More pronounced malty flavor than 2-Row Brewers Malt.Use with 2-Row Brewers Malt for rich malt flavor and additional color."
    },     
    {
        name: "Pale Ale Malt, Full Pint (Great Western)",
        potential: 1.037,
        color: 2.25,
        description: "GWM Full Pint Malt (2.0-2.5L) A spring 2-row barley developed at Oregon State University (originally named BCD-47). Described as 'very fermentable and having a very nice extract... Full Pint wort also tasted very good, pre and post boiled... a very pleasant and strong fresh salted popcorn note. A very positive clean sweetness as well, with no harshness or astringency... the fermented Full Pint beer was clean, slightly estery, a bit tart and bready.'"
    },     
    {
        name: "Pale Chocolate",
        potential: 1.028,
        color: 225,
        description: "Dark malt that gives a rich red or brown color and nutty flavor. Use for: Brown ales, porters, some stouts Maintains some malty flavor, not as dark as roasted malt."
    },     
    {
        name: "Pale Chocolate Malt",
        potential: 1.033,
        color: 250,
        description: ""
    },     
    {
        name: "ale Malt (2 Row) Belgian",
        potential: 1.037,
        color: 3,
        description: "Base malt for all beer styles Higher potential yield than US, English equivalent pale ale malts"
    },     
    {
        name: "ale Malt (2 Row) UK",
        potential: 1.036,
        color: 3,
        description: "Base malt for all English beer styles Lower diastatic power than American 2 Row Pale Malt"
    },     
    {
        name: "Pale Malt (2 Row) US",
        potential: 1.036,
        color: 2,
        description: "Base malt for all beer styles"
    },     
    {
        name: "Pale Malt (6 Row) US",
        potential: 1.035,
        color: 2,
        description: "Base malt for all beer styles"
    },     
    {
        name: "Pale Malt, Golden Promise",
        potential: 1.037,
        color: 2.5,
        description: "Malt from a traditional barley variety grown in Scotland. Golden Promise produces a mellow wort, with a sweet, clean flavor. This base malt is a must for authentic Scottish ales, great for English styles as well."
    },     
    {
        name: "Pale Malt, Golden Promise (Thomas Fawcett)",
        potential: 1.038,
        color: 3,
        description: "Floor malted spring barley from the UK. Suitable base male for all types of ales."
    },     
    {
        name: "Pale Malt, Halcyon",
        potential: 1.037,
        color: 2.5,
        description: "Halcyon Pale Ale Malt is considered to be one of the last remaining traditional English Pale Malts. Adds a degree of biscuit flavor to the beer. Brighter and lighter in flavor than Pearl, Halcyon is a great malt for the production of Real Ales. It tends to produce a less sweet wort than Maris Otter."
    },          
    {
        name: "Pale Malt, Maris Otter",
        potential: 1.038,
        color: 3,
        description: "Premium base malt from the UK. Popular for many English styles of beer including ales, pale ales and bitters."
    }, 
    {
        name: "Peat Smoked Malt",
        potential: 1.034,
        color: 2.8,
        description: "Robust smoky malt that provides a smoky flavor. Used in scottish ales and wee heavy ales."
    }, 
    {
        name: "Pilsen (BestMälz",
        potential: 1.036,
        color: 1.5,
        description: "BEST Pilsen Malt gives beer a fresh and rounded taste. It is used for all types of beers based on basically barley malt. It forms an excellent “light” and enzyme-rich foundation for almost all beer styles. Malt characteristics: low protein levels, high extract content, light color and high enzymatic activity. BEST Pilsen Malt is also available in organic quality."
    }, 
    {
        name: "Pilsner (2 Row) Belgian",
        potential: 1.036,
        color: 2,
        description: "Belgian base malt for Continental lagers"
    }, 
    {
        name: "Pilsner (2 Row) German",
        potential: 1.037,
        color: 2,
        description: "German base for Pilsners and Bohemian Lagers"
    }, 
    {
        name: "Pilsner (2 Row) UK",
        potential: 1.036,
        color: 1,
        description: "Pilsner base malt"
    }, 
    {
        name: "Pilsner (Weyermann)",
        potential: 1.038,
        color: 1.7,
        description: "Pilsner base malt for all pilsners, lagers. Highly modified malt."
    }, 
    {
        name: "Rice, Flaked",
        potential: 1.032,
        color: 1,
        description: "Used to add fermentables without increasing body or flavor. Produces a milder, less grainy tasting beer. Examples: American lagers, Bohemian lagers, Pilsners"
    }, 
    {
        name: "Roasted Barley",
        potential: 1.032,
        color: 300,
        description: "Roasted at high temperature to create a burnt, grainy, coffee like flavor. Imparts a red to deep brown color to beer, and very strong roasted flavor. Use 2-4% in Brown ales to add a nutty flavor, or 3-10% in Porters and Stouts for coffee flavor."
    }, 
    {
        name: "Rye Malt",
        potential: 1.029,
        color: 4.7,
        description: "Adds a dry, crisp character to the beer. Yields a deep red color, and a distinctive rye flavor Must limit to 10-15% of the mash as it tends to produce 'stuck' mashes."
    }, 
    {
        name: "Rye, Flaked",
        potential: 1.036,
        color: 2,
        description: "Imparts a dry, crisp rye flavor to rye beers. Can be easier to mash than raw rye."
    }, 
    {
        name: "Rye, Flaked (Briess)",
        potential: 1.033,
        color: 4.6,
        description: "Use up to 40% as a cereal adjunct in the total grist to create Rye Beer. Start at 5-10% and increase in increments of 5% because of the concentrated flavor of Rye Flakes."
    }, 
    {
        name: "Rye, Flaked (toasted)",
        potential: 1.036,
        color: 10,
        description: "Imparts a more intendse dry, crisp rye flavor to rye beers. Can be easier to mash than raw rye."
    }, 
    {
        name: "Smoked Malt",
        potential: 1.037,
        color: 9,
        description: "Malt that has been smoked over an open fire. Creates a distinctive 'smoked' flavor and aroma. Used primarily for German Rauchbier but can also be added to Brown Ales and Porters."
    }, 
    {
        name: "Special B (Castle Malting)",
        potential: 1.035,
        color: 152,
        description: "Mycket speciell belgisk karkellmalt.Ger en djupt röd till mörkt brun-svart färg och fylligare kropp, unik rik maltig smak och arom av russin, nötter och plommon. Används tex till Abbey Ales."
    }, 
    {
        name: "Special B (Dingemans)",
        potential: 1.030,
        color: 147,
        description: ""
    }, 
    {
        name: "Special B Malt",
        potential: 1.030,
        color: 180,
        description: "Extreme caramel aroma and flavored malt. Used in dark Belgian Abbey and Trappist ales. Unique flavor and aroma."
    }, 
    {
        name: "Special Roast",
        potential: 1.033,
        color: 50,
        description: "Use for English ales, nut brown ales and porters. Adds a toasted, biscuit like flavor and aroma"
    }, 
    {
        name: "Thomas Fawcett Maris Otter",
        potential: 1.037,
        color: 3,
        description: "Premium base malt from the UK. Popular for many English styles of beer including ales, pale ales and bitters."
    }, 
    {
        name: "Toasted Malt",
        potential: 1.033,
        color: 27,
        description: "Toasted malt can be made at home by toasting pale malted barley for 10-15 minutes at 350 F. Similar to Biscuit or Victory malt - this malt adds reddish/orange color and improved body without sweetness. Toasted flavor. Mashing required to avoid haze."
    }, 
    {
        name: "Two-Row Pale Malt",
        potential: 1.037,
        color: 3,
        description: "Batch from Craft Maltster in Texas - Blacklands Malt"
    }, 
    {
        name: "Victory Malt",
        potential: 1.034,
        color: 25,
        description: "Toasted malt that adds a 'Biscuit' or toasted flavor to English ales. Use for: Nut brown ales, porters"
    }, 
    {
        name: "Vienna Malt",
        potential: 1.036,
        color: 3.5,
        description: "Kiln dried malt darker than Pale Malt, but not as dark as Munich Malt Imparts a golden to orange color to the beer."
    }, 
    {
        name: "Vienna Malt (Briess)",
        potential: 1.038,
        color: 3.5,
        description: "FLAVOR: Malty, Very Slight Biscuit Can be used as a base malt Use with Caramel Malts to produce malty red and amber beers."
    }, 
    {
        name: "Vienna Malt (Weyermann)",
        potential: 1.038,
        color: 3,
        description: "Vienna base malt - used in many continental beer styles. Full bodied, golden color."
    }, 
    {
        name: "Wheat - White Malt (Briess)",
        potential: 1.039,
        color: 2.3,
        description: "FLAVOR: Creamy, Sweet, Malty, Wheat, Floury Imparts malty flavor not obtainable from raw wheat. Use with rice hulls to improve lautering and help prevent stuck mash. White Wheat Malt contributes to foam production and foam stability."
    }, 
    {
        name: "Wheat Malt, Dark",
        potential: 1.039,
        color: 9,
        description: "Dark malted wheat base for use in dark wheat styles such as Dunkleweizen."
    }, 
    {
        name: "Wheat Malt, White",
        potential: 1.040,
        color: 2.4,
        description: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers"
    }, 
    {
        name: "Wheat Malt, White (Rahr)",
        potential: 1.039,
        color: 4,
        description: "It’s a great base malt for any style wheat beer. It has a doughy, malty, bready flavor and aroma, with white wheat having a slightly milder wheat flavor than red wheat. High protein levels in wheat lend a fullness of body and excellent head retention, but can lead to difficulty sparging. Use small amounts to enhance foam, or use up to 50% of the grist. Recommend incorporating rice hulls to prevent a stuck sparge when using greater than 25%."
    }, 
    {
        name: "Wheat, Flaked",
        potential: 1.035,
        color: 1.6,
        description: "Flaked wheat adds to increased body and foam retention Used in place of raw or torrified wheat for faster conversion and better yield. May be used in small amounts to improve head retention and body Examples: Belgian White beer, Wit"
    }, 
    {
        name: "Wheat, Roasted",
        potential: 1.025,
        color: 425,
        description: "	Also called Chocolate Wheat Malt. Kilned raw wheat - adds a deep, dark brown color to dunkelweizens and other dark beer styles. Roasted, woody, charcoal or burnt toast flavor depending on degree of roasting."
    }, 
    {
        name: "Wheat, Torrified",
        potential: 1.036,
        color: 1.7,
        description: "Unmodified wheat that has been 'popped' to open the kernels Used primarily in place of raw wheat when making Belgian White and Wit Faster conversion and higher yield than raw wheat Protein rest recommended when mashing"
    }, 
    {
        name: "White Wheat Malt",
        potential: 1.040,
        color: 2.4,
        description: "White wheat gives a malty flavor not available from raw wheat. Used in Weiss, Wit and White beers"
    }
];
module.exports = seed_fermentables;