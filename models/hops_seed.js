let seed_hops = [
    {
        name: "Admiral",
        type: "Bittering",
        alpha: 14.75,
        beta: 5.60,
        description: "Bittering hops derived from Wye Challenger. Good high-alpha bittering hops. Used for: Ales Aroma: Primarily for bittering Substitutes: Target, Northdown, Challenger"
    },
    {
        name: "Ahtanum",
        type: "Aroma",
        alpha: 6,
        beta: 5.25,
        description: "Distinctive aromatic hops with moderate bittering power from Washington. Used for: American ales and lagers Aroma: Distinctive floral and citrus aromas Substitutes: Amarillo, Cascade"
    },
    {
        name: "Amarillo",
        type: "Aroma",
        alpha: 8.5,
        beta: 6,
        description: "	Unknown origin, but character similar to Cascade. Used for both bitterness and aroma. Used for: IPAs, Ales Aroma: Citrus, flowery Substitutes: Cascade, Centennial"
    },
    {
        name: "Apollo",
        type: "Bittering",
        alpha: 17,
        beta: 6.75,
        description: "Super high alpha variety from the Hopsteiner breeding program released in 2006. High alpha and low cohumulone makes it a great bittering hop. Adds a strong grapefruit/hop note if added late in boil. Substitutes: Nugget, Columbus, Tomahawk, Zeus"
    },
    {
        name: "Aquila",
        type: "Aroma",
        alpha: 6.5,
        beta: 3,
        description: "Aroma hops developed in 1988. Limited use due to high cohumolone. Used for: Aroma hops Substitutes: Cluster No longer commercially grown."
    },
    {
        name: "Atlas",
        type: "Bittering",
        alpha: 9,
        beta: 3.7,
        description: "A cross between Brewers Gold and Slovenian wild hops. Primarily a bittering hop with pleasant bitterness and aroma. Used for: Bittering ales, lagers Substitutes: Brewers Gold"
    },
    {
        name: "Aurora",
        type: "Bitter and Aroma",
        alpha: 8.25,
        beta: 3.5,
        description: "Also called Super Styrian. This is a hybrid between Northern Brewer and TG. It has a pleasant hoppy aroma similar to Styrian Goldings but lighter. Used for: Often mixed with other hops in lagers. Substitutes: Styrian Goldings"
    },
    {
        name: "Australian Summer",
        type: "Aroma",
        alpha: 6,
        beta: 5.45,
        description: "Aroma hop from Australia. It features balanced citrus and stone fruit flavors, but showcases distinct apricot and melon characteristics in dry hopping applications."
    },
    {
        name: "Banner",
        type: "Bittering",
        alpha: 10,
        beta: 4,
        description: "Bittering hops developed in 1988. Use largely discontinued due to poor storage. Used for: U.S. style ales Substitutes: Cluster"
    },
    {
        name: "Bobek",
        type: "Bittering and Aroma",
        alpha: 5.25,
        beta: 5,
        description: "Also called Styrian Golding B - a cross between Northern Brewer and a TG seedling. Pleasant hop aroma and flavor. Used for: Moderate English ales and lagers/Pilsners Substitutes: Northern Brewer"
    },
    {
        name: "Bramling Cross",
        type: "Aroma",
        alpha: 6,
        beta: 3,
        description: "Developed in 1927 from commercial Goldings and wild hop variety. Used for: ESB, Bitters, Pale Ale Aroma: Mild, fruity, currant aroma. Substitutes: East Kent Goldings, Progress, Whitbred"
    },
    {
        name: "Bravo",
        type: "Bittering",
        alpha: 15.5,
        beta: 3.5,
        description: "A second generation super high alpha hops from the Hopsteiner breeding program released in 2006. Good bittering hop. Aroma: Fruity and floral aroma. Substitutes: Columbus, Zeus, Tomahawk"
    },
    {
        name: "Brewer's Gold",
        type: "Bittering",
        alpha: 8,
        beta: 3.7,
        description: "Traditional bittering hops for English ales and heavy German lagers. Aroma: Sharp bittering hop Substitutes: Northern Brewer, Galena, Chinook, Eroica Example: Pete's Wicked Ale"
    },
    {
        name: "Bullion",
        type: "Bittering",
        alpha: 8,
        beta: 4.5,
        description: "Used in strong dark English ales, some heavy German lagers. Aroma: Strong, pungent and bitter in flavor. Blackcurrant flavor. Substitutes: Chinook, Eroica, Brewer's Gold"
    },
    {
        name: "Calypso",
        type: "Bitter and Aroma",
        alpha: 13,
        beta: 6,
        description: "A new, dual-purpose hop from the Hopsteiner breeding program that may establish itself as 'special'. Used for: Ales, Stouts and Barley Wines Aroma: Not as tropical as the name might imply but rich in both stone fruits (pear and peaches, notes of cherry) and citrus. Substitutions:"
    },
    {
        name: "Cascade",
        type: "Bittering and Aroma",
        alpha: 5.5,
        beta: 6,
        description: "A hops with Northern Brewers Heritage Used for: American ales and lagers Aroma: Strong spicy, floral, grapefruit character Substitutes: Centennial Examples: Sierra Nevada Pale Ale, Anchor Liberty Ale"
    },
    {
        name: "Celeia",
        type: "Bitter and Aroma",
        alpha: 4.5,
        beta: 2.6,
        description: "A dual purpose hops that is a hybrid between Savinjski Golding, Aurora and Slovenian wild hops. Similar in aroma to Saaz. Used for: Light lagers, Pilsners, Belgian ales. Substitutes: Saaz, Styrian Goldings"
    },
    {
        name: "Centennial",
        type: "Bittering",
        alpha: 10,
        beta: 4,
        description: "Used for: General purpose bittering, aroma in American ales and Wheats Aroma: Floral, citrus aroma, spicy, clean bittering flavor Substitutes: Galena, Eroica, Nugget, Bullion Examples: Sierra Nevada Celebration Ale, Sierra Nevada Bigfoot"
    },
    {
        name: "Challenger",
        type: "Aroma",
        alpha: 7.5,
        beta: 4,
        description: "Variant of Northern Brewers heritage Used for: Both aroma and bittering for ales and lagers Aroma: Fruity in flavor, spicy aroma, blends well Substitutes: N/A"
    },
    {
        name: "Chelan",
        type: "Bittering",
        alpha: 13.25,
        beta: 9.25,
        description: "High alpha variety from the Haas breeding program released in 2004. It is a variant of Galena and very similar in profile to Galena. Aroma: Pleasant citrus notes Substitutes: Galena"
    },
    {
        name: "Chinook",
        type: "Bittering",
        alpha: 13,
        beta: 3.6,
        description: "trong versatile bittering hop Used for: Ales, porters, stouts Aroma: Heavy and spicy aroma Substitutes: Galena, Eroica, Nugget, Bullion Examples: Sierra Nevada Stout, Sierra Nevada Celebration Ale"
    },
    {
        name: "Citra",
        type: "Bitter and Aroma",
        alpha: 12,
        beta: 4,
        description: "Special aroma hops released in 2007. Imparts high alpha/oil content but low cohumulone. Aroma: Adds interesting citrus and tropical fruit character to the beer. Substitutes: Unknown"
    },
    {
        name: "Cluster",
        type: "Bittering",
        alpha: 7,
        beta: 4.8,
        description: "Used for: General purpose bittering hop Aroma: Floral, slightly spicy. Sharp aroma and sharp flavor Substitutes: Eroica, Galena"
    },
    {
        name: "Columbia",
        type: "Bittering",
        alpha: 5.5,
        beta: 3,
        description: "Sibling of Williamette hops. Used for: All English Ales Aroma: Close to Fuggles Substitutes: Fuggles, Williamette"
    },
    {
        name: "Columbus (Tomahawk)",
        type: "Bittering",
        alpha: 14,
        beta: 5,
        description: "Engineered Centennial Substitute - High alpha bittering hops. Used for: Bittering, flavor, aroma - IPA, American Pale Ale, Stout, Lager Aroma: Pungent, spicy. Strongly aromatic, but clean tasting bitterness Substitutes: Centennial"
    },
    {
        name: "Comet",
        type: "Bittering",
        alpha: 9.5,
        beta: 4,
        description: "Very bitter hops - use sparingly with other hops Used for: Bittering only Substitutes: N/A"
    },
    {
        name: "Crystal",
        type: "Aroma",
        alpha: 3.5,
        beta: 5.2,
        description: "Used for: Aroma and finishing hops for Lagers Aroma: Clean, mild, pleasant and slightly spicy Substitutes: Hallertauer, Mount Liberty"
    },
    {
        name: "East Kent Goldings",
        type: "Bittering and Aroma",
        alpha: 5,
        beta: 3.5,
        description: "Also known as Canterbury Hops by some, although others will dispute this fact. East Kent Goldings gracefully defines the English Pale Ales and Ales produced by the region, it is quintessentially English. Used for: English Ale, Porter, Scottish and Irish Ale, Stout, Strong Ale, ESB, Saison, Barleywine. Aroma: Floral, aromatic, earthy, slightly sweet spicy flavor Substitutes: First Gold, Fuggles, other Golding varieties, Progress, Target, and Whitbread Golding"
    },
    {
        name: "El Dorado",
        type: "Bittering and Aroma",
        alpha: 15,
        beta: 7,
        description: "A hop from Washington's Moxee Valley, a sub-region of the Yakima Valley. This hop has an intense, candylike aroma, along with cherries and other fruits."
    },
    {
        name: "Eroica",
        type: "Bittering",
        alpha: 13,
        beta: 4.8,
        description: "Used for: General purpose bittering for ales, porters, stouts Aroma: Clean bittering hop, very bitter Substitutes: Galena, Northern Brewer, Chinook Examples: Blackhook Porter, Ballard Bitter"
    },
    {
        name: "Feux Coeur Francais",
        type: "Bitter and Aroma",
        alpha: 14,
        beta: 6,
        description: "Rare, high alpha hops from Australia with genetic roots in the Burgundy region of France. It was adopted to the Victoria region of Australia and introduced in 2010."
    },
    {
        name: "First Gold",
        type: "Bittering and Aroma",
        alpha: 7.5,
        beta: 3.5,
        description: "	Dwarf hop with English Golding character Used for: Ales, ESB Aroma: Similar to other Golding varieties, spicy Substitutes: East Kent Goldings, Crystal"
    },
    {
        name: "Fuggles",
        type: "Aroma",
        alpha: 4.5,
        beta: 2,
        description: "Used for: General purpose bittering/aroma for English Ales, Dark Lagers Aroma: Mild, soft, grassy, floral aroma Substitute: East Kent Goldings, Williamette Examples: Samuel Smith's Pale Ale, Old Peculiar, Thomas Hardy's Ale"
    },
    {
        name: "Galaxy",
        type: "Bittering",
        alpha: 14,
        beta: 5.9,
        description: "A high alpha, dual purpose seedless hops with a unique hop aroma. It can be used either for bittering or as a late hop addition to provide a flavor of citrus and passionfruit to the finished beer. Aroma: Intense, pleasant, unique."
    },
    {
        name: "Galena",
        type: "Bittering",
        alpha: 12.5,
        beta: 8,
        description: "Used for: General bittering hops for all beers Aroma: Strong, clean, balanced bittering Substitutes: Eroica, Northern Brewer, Cluster, Chinook Examples: Catamount Porter"
    },
    {
        name: "Glacier",
        type: "Aroma",
        alpha: 5.6,
        beta: 7.6,
        description: "Genetic mix of at least 8 hops including Elsasser, Brewers Gold, N Brewer, Bullion, Early Green, and others...released in 2000. Used for: Aroma Aroma: Excellent, hoppy Substitutes: N/A"
    },
    {
        name: "Goldings, B.C.",
        type: "Aroma",
        alpha: 5,
        beta: 3.2,
        description: "Used for: Bittering and finishing British ales, bitters, porters and stouts. Aroma: Spicy, floral, rounded mild aroma. Substitutes: East Kent Goldings, Fuggles"
    },
    {
        name: "Goldings, East Kent",
        type: "Aroma",
        alpha: 5,
        beta: 3.5,
        description: "Used for: General purpose hops for bittering/finishing all British Ales Aroma: Floral, aromatic, earthy, slightly sweet spicy flavor Substitutes: Fuggles, BC Goldings Examples: Bass Pale Ale, Fullers ESB, Samual Smith's Pale Ale"
    },
    {
        name: "Green Bullet",
        type: "Bittering",
        alpha: 13.5,
        beta: 7,
        description: "Bittering hops from New Zealand developed in 1972 Used for: Australian-style ales and lagers. Aroma: Floral, raisin aroma. Substitutes: Styrian Goldings"
    },
    {
        name: "Greenburg",
        type: "Aroma",
        alpha: 5.2,
        beta: 7.2,
        description: "American hop variety from southern Idaho. Fruity flavor with a touch of wood flavor. Popular with microbreweries."
    },
    {
        name: "Hallertau Magnum",
        type: "Bittering",
        alpha: 14,
        beta: 5.5,
        description: "German Hallertauer hybrid, widely used in Germany. Extremely appropriate for early boil additions. Used for: German ales and lagers, bitters, IPAs, pilsners, pale ales, stouts. Aroma: somewhat unnoticeable aroma; stable spicy flavor Substitutes: Hallertau Taurus, Columbus, Nugget Storage"
    },
    {
        name: "Hallertauer",
        type: "Aroma",
        alpha: 4.8,
        beta: 4,
        description: "Used for: German Ales, German/US/Canadian Lagers, Wheat Beers Aroma: Pleasant, mild spicy flavor, clean, neutral flavor Substitutes: Crystal, Liberty, Hallertauer Mittelfrueh"
    },
    {
        name: "Hallertauer, New Zealand",
        type: "Bittering and Aroma",
        alpha: 8.5,
        beta: 3,
        description: "Hallertauer variant with classic aroma and ability to retain clean taste. Bred from German Hallertauer Mittelfrueh Used for: Australian Ales Substitutes: Hallertauer Mittelfrueh"
    },
    {
        name: "Herald",
        type: "Bittering",
        alpha: 12,
        beta: 5.2,
        description: "Dwarf variety bred at Wye College (mid 1990s) Used for: Bittering of ales Aroma: Strong, acceptable Substitutes: High alpha English bittering hops"
    },
    {
        name: "Horizon",
        type: "Bittering",
        alpha: 12,
        beta: 7.5,
        description: "Good dual purpose hops derived from Nugget hops in Oregon (1970) Used for: All purpose Ales, Lagers Aroma: Pleasant, hoppy Substitutes: Magnum or other high alpha hops"
    },
    {
        name: "Kent Goldings",
        type: "Aroma",
        alpha: 4.3,
        beta: 3.5,
        description: "Used for: German style lagers Aroma: Fine, mild, slightly spicy flavor Substitutes: Hallertau, Mt Hood, Crystal Examples: Pete's Wicked Lager"
    },
    {
        name: "Lublin",
        type: "Bittering",
        alpha: 5,
        beta: 3,
        description: "Version of Saaz grown in Poland - also called 'Lubelski' Used for: Bohemian lagers and Pilsners Aroma: Noble, mild flavor similar to Saaz Substitutes: Saaz, Tettnanger"
    },
    {
        name: "Magnum",
        type: "Bittering",
        alpha: 14,
        beta: 6.5,
        description: "German Hallertauer hybrid, widely used in Germany Used for: German ales and lagers Aroma: Good aroma and stable spicy flavor Substitutes: N/A"
    },
    {
        name: "Marynka",
        type: "Bittering",
        alpha: 10.5,
        beta: 11.4,
        description: "Bittering hops with high aroma. Primarily for use in Pilsner, lagers, ales or wheats. Comparable to English Goldings or Chinook. Used for: Lager, ales Substitutes: Chinook, English Golding"
    },
    {
        name: "Mandarina Bavaria",
        type: "Aroma",
        alpha: 10.5,
        beta: 6.5,
        description: "Tangerine, Citrus.  Substitutions: Columbus, Nugget, Cascade"
    },
    {
        name: "Millenium",
        type: "Bittering",
        alpha: 14.25,
        beta: 5.7,
        description: "Originally developed as part of the Haas breeding program in the US, Millenium entered production in 2000. It is a very high alpha hops used for bittering. Aroma: Mild, herbal Substitutes: Columbus, Tomahawk, Zeus and Nugget"
    },
    {
        name: "Mosaic",
        type: "Aroma",
        alpha: 12.7,
        beta: 3.5,
        description: "Related to Simcoe. A complex array of tropical fruit, citrus, berry, herbal, earthy and pine characteristics."
    },
    {
        name: "Motueka",
        type: "Aroma",
        alpha: 7,
        beta: 5.25,
        description: "Flexible hop developed from Saaz. Has notable character and aroma, balanced bitterness, and unique flavor. Used for: Lagers, Belgian Ales and Bohemian Pilsner. Substitutes: Saaz"
    },
    {
        name: "Mt. Hood",
        type: "Aroma",
        alpha: 6,
        beta: 6.3,
        description: "	Used for: European Lagers, finishing Aroma: Mild with a clean aroma, neutral flavor. Somewhat pungent. Substitutes: Hallertauer, Liberty, Crystal"
    },
    {
        name: "Nelson Sauvin",
        type: "Bittering",
        alpha: 12,
        beta: 7,
        description: "Triploid variety bred from 'Smoothcone' released in 2000. Oil profile said to taste like 'fresh crushed gooseberries' similar to Sauvignon Blanc, giving it its name. Very fruity, citrusy - use in moderation. Used for: Pale ale, Super Premiums. Substitutes: None"
    },
    {
        name: "Newport",
        type: "Bittering",
        alpha: 13.5,
        beta: 6,
        description: "High alpha hops released in 2002 as a potential replacement for Galena. Note that these hops have a large alpha range of 9.8%-17% so check the package! Fairly pungent. Used for: Primarily used for bittering in ales, stouts, barley wine. Substitutes: Galena"
    },
    {
        name: "Northdown",
        type: "Bittering and Aroma",
        alpha: 8.5,
        beta: 5.5,
        description: "Variation of Northern Brewers hops grown in England. Used for: Bittering in English ales Aroma: Good bittering, flavor and aroma Substitutes: Northern Brewer"
    },
    {
        name: "Northern Brewer",
        type: "Bittering and Aroma",
        alpha: 8.5,
        beta: 4,
        description: "Also called Hallertauer Northern Brewers Used for: Bittering and finishing both ales and lagers of all kinds Aroma: Fine, dry, clean bittering hop. Unique flavor. Substitutes: Hallertauer Mittelfrueh, Hallertauer Examples: Anchor Steam, Old Peculiar,"
    },
    {
        name: "Nugget",
        type: "Bittering",
        alpha: 13,
        beta: 5,
        description: "Used for: Bittering hops for ales Aroma: Strong bittering, heavy, herbal aroma, spicy Substitutes: Chinook Examples: Sierra Nevada Porter"
    },
    {
        name: "Olympic",
        type: "Bittering",
        alpha: 11.5,
        beta: 5.5,
        description: "	Olympic is a high alpha hops released by Washington Agricultural Expt Station in 1983. Heritage is from Brewers Gold and Fuggles. Aroma: Spicy, citrus aroma Substitutes: Brewers Gold"
    },
    {
        name: "Opal",
        type: "Aroma",
        alpha: 6.5,
        beta: 4.5,
        description: "New variety from the hop research center in Hull. Used for: Aroma hops in continental styles Aroma: High aroma hops with hints of spice and subtle citrus. Substitutes: Unknown"
    },
    {
        name: "Orion",
        type: "Bittering and Aroma",
        alpha: 7.25,
        beta: 3.7,
        description: "Cross between Perle and an experimental variety Used for: Bittering and aroma Aroma: Pleasant, hoppy Substitutes: Perle"
    },
    {
        name: "Pacific Gem",
        type: "Bittering",
        alpha: 15,
        beta: 8.2,
        description: "High alpha smoothcone cross developed at DSIR in 1987. Used for: Bittering - produces a cask-oak woody flavor. Aroma: Pleasant - some blackberry aroma. Substitutes: Bullion"
    },
    {
        name: "Pacific Jade",
        type: "Bittering",
        alpha: 13,
        beta: 7.5,
        description: "High alpha bittering hops that delivers a bold herbal infusion of fresh citrus with some black pepper flavor. Citrus aroma and flavor tempers ales and may be used as a finishing hops. Used for: Ales, lagers Substitutes: N/A"
    },
    {
        name: "Pacifica",
        type: "Aroma",
        alpha: 5.5,
        beta: 6,
        description: "Aroma hop developed from Hallertauer Mittelfrueh in New Zealand (1994). Blend of old and new world taste including Orange marmalade and citrus aroma notes when used in late addition. Soft finish if used in bittering. Substitutes: Chinook, Hallertauer Mittelfrueh"
    },

    {
        name: "Palisade",
        type: "Bittering and Aroma",
        alpha: 7.5,
        beta: 7,
        description: "Also called YCR-4, Palisade is an aroma variety bread by Yakima Chief Ranches. It has both aromatic and moderate bittering properties. Substitutes: Willamette"
    },

    {
        name: "Perle",
        type: "Bittering",
        alpha: 8,
        beta: 4.75,
        description: "Used for: General purpose bittering for US and German ales, lagers Aroma: Slightly spicy, pleasant aroma, minty Substitutes: Chinook, Galena, Northern Brewer Examples: Sierra Nevada Pale Ale, Pale Bock"
    },

    {
        name: "Phoenix",
        type: "Bittering",
        alpha: 8,
        beta: 4.6,
        description: "	Seedling derived from Wye Yoeman. Used for: Ales Aroma: Similar to Wye Challenger hops Substitutes: Challenger, East Kent Golding, Northdown"
    },

    {
        name: "Pilgrim",
        type: "Bittering",
        alpha: 11.5,
        beta: 4.7,
        description: "New variety from Wye College in 2001. High Selinene content. Used for: Bittering Substitutes: N/A"
    },

    {
        name: "Pilot",
        type: "Bittering",
        alpha: 11.5,
        beta: 3,
        description: "	A very new hops introduced in 2002 by Charles Faram & Co Ltd. Mild herbal flavor with lemon hints and fresh mowed grass flavor. Used for: Primarily for bittering in APAs. Rare."
    },

    {
        name: "Pioneer",
        type: "Bittering and Aroma",
        alpha: 9,
        beta: 3.75,
        description: "Bred from Wye Omega at Wye College in the UK Used for: ESB, English Ales Aroma: Mild English hop aroma Substitutes: East Kent Goldings"
    },

    {
        name: "Premiant",
        type: "Bittering and Aroma",
        alpha: 7.5,
        beta: 4.5,
        description: "A cross between Czech aroma and bittering varieties. Dual purpose though its aroma is not as strong as some other Czech hops. Use in beers where a moderate hoppy aroma is needed. Used for: Moderate ales, lagers Substitutes: Saaz"
    },

    {
        name: "Pride of Ringwood",
        type: "Bittering",
        alpha: 9,
        beta: 5.75,
        description: "Used for: General purpose bittering hops for Australian beers Aroma: Moderate citric aroma, clean bittering flavor Substitutes: Cluster, Galena"
    },

    {
        name: "Progress",
        type: "Aroma",
        alpha: 6.25,
        beta: 2.10,
        description: "Used for: Bittering and aroma in English Ales Aroma: Similar to Fuggles, aromatic, slightly sweet Substitutes: Fuggles"
    },

    {
        name: "Riwaka",
        type: "Aroma",
        alpha: 5.25,
        beta: 4.5,
        description: "Formerly called B-Saaz, this was developed from old line Saazer hops in New Zealand. Used for: New world pale ale, regional pilsners Aroma: Strong, hoppy. Some grapefruit and citrus character."
    },

    {
        name: "Saaz",
        type: "Aroma",
        alpha: 4,
        beta: 3.5,
        description: "Used for: Pilsners and Bohemian style lagers Aroma: Delicate, mild, clean, somewhat floral -- Noble hops Substitutes: Tettnanger, Lublin Examples: Pulsner Urquell"
    },

    {
        name: "Santiam",
        type: "Aroma",
        alpha: 6,
        beta: 7,
        description: "Triploid aroma selection derived from Tettnang and Hallertauer (1997) Used for: Lager, U.S. Pale Ale, Pilsner Substitutes: German Tettnang, Spalt, Spalt Select"
    },

    {
        name: "Saphir",
        type: "Bittering",
        alpha: 3.5,
        beta: 4.6,
        description: "	A new noble breed as an alternative to Hallertau Mittelfrueh in an attempt to make it more disease resistant and commercially viable. Similar in character to Hallertau varieties. Used for: Pilsners, lagers, Belgian whites. Substitutes: Hallertau Mittelfrueh"
    },

    {
        name: "Satus",
        type: "Aroma",
        alpha: 13.25,
        beta: 8.75,
        description: "High alpha bittering hops from Yakima that is similar to Galena. Of recent origin. Substitutes: Galena"
    },

    {
        name: "Select Spalt",
        type: "Aroma",
        alpha: 4.75,
        beta: 3.5,
        description: "Bred from Hallertauer Mittelfrueh and Spalt in Germany. Spalt character. Used for: Lager, Pilsner, Noble aroma hop substitute Aroma: Very fine, spalt aroma Substitutes: Spalter, Saaz, Tettnang"
    },
    {
        name: "Simcoe",
        type: "Bittering",
        alpha: 13,
        beta: 4.5,
        description: "High alpha bittering hops with good aroma characteristics. Used for: IPAs Aroma: Citrus and pine-like aroma Substitutes: N/A"
    },
    {
        name: "Sladek",
        type: "Aroma",
        alpha: 5,
        beta: 7.5,
        description: "Hybrid variety of Saaz origin with noble hoppy taste and aroma. Generally recommended for middle-hopping about 20 min before end of boil. Not a replacement for Saaz, but complimentary in Lagers. Used for: Lager Substitutes: Saaz"
    },
    {
        name: "Sorachi Ace",
        type: "Bittering",
        alpha: 12,
        beta: 6,
        description: "Developed by Sapporo Breweries and used in their beers - has a Brewer's gold and Saaz heritage. Reported to be lemony in flavor and aroma. Used for: Saison, IPA or other beer where lemon/citrus is desirable. Substitutes: Admiral, Cascade"
    },
    {
        name: "Southern Cross",
        type: "Bittering and Aroma",
        alpha: 13,
        beta: 6.2,
        description: "Dual purpose with 'European' flavor - from DSIR in 1994 Used for: European flavor bittering/aroma Aroma: Spicy, lemony, slight pine and wood flavors Substitutes: N/A"
    },
    {
        name: "Spalter",
        type: "Aroma",
        alpha: 4.5,
        beta: 4,
        description: "Used for: Traditional German bittering and aroma hops, Altbiers, Lagers Aroma: Mild, pleasant, slight spice Substitutes: Saaz, Tettnang Examples: Dusseldorf Altbiers"
    },
    {
        name: "Sterling",
        type: "Bittering and Aroma",
        alpha: 7.5,
        beta: 5,
        description: "Flavor is a cross between Saaz and Mt Hood Used for: Lagers, Ales, Pilsners Aroma: Herbal, spicy, some floral and citrus hints Substitutes: Saaz, Polish Lublin"
    },
    {
        name: "Strisslespalt",
        type: "Aroma",
        alpha: 4,
        beta: 3.8,
        description: "	Aroma hops used widely in the Alsace area of France. Used for: Pilsner, lager, wheat Aroma: Medium intensity, pleasant, hoppy Substitutes: Mt Hood, Crystal, Hallertauer Hersbruck"
    },
    {
        name: "Styrian Goldings",
        type: "Aroma",
        alpha: 5.4,
        beta: 2.9,
        description: "A seedless version of Fuggles grown in Slovenia Used for: Bittering, finishing for a wide variety of European Beers. Popular in Europe and the United Kingdom Aroma: Mild, soft, grassy, floral aroma. Similar to Fuggles. Substitutes: Fuggles, Williamette"
    },
    {
        name: "Summit",
        type: "Bittering",
        alpha: 17,
        beta: 5,
        description: "High alpha variety bred by American Dwarf Hop Assoc. Can be grown commercially on a low trellis. Aroma: Strong citrus, grapefruit notes. Substitutes: Warrior, Millenium, Columbus, Tomahawk, Zeus"
    },
    {
        name: "Sun",
        type: "Bittering",
        alpha: 14,
        beta: 5.5,
        description: "A very high alpha bittering hops from Yakima Valley, Washington Used for: Bittering (intense) Aroma: Pleasant, hoppy Substitutes: Other very high alpha US hops"
    },
    {
        name: "Tettnang",
        type: "Aroma",
        alpha: 4.5,
        beta: 3.5,
        description: "Used for: German ales, lagers and wheat beer Aroma: Noble, mild, fine, slightly spicy Substitutes: Saaz, Spalt Examples: Sam Adams Octoberfest, Anderson Valley ESB"
    },
    {
        name: "Tillicum",
        type: "Bittering",
        alpha: 13.25,
        beta: 9.9,
        description: "High alpha and high beta hops developed though Haas breeding program and released in 1995. Daughter variety of Galena and related to Chelan - so similar to both. Substitutes: Galena, Chelan"
    },
    {
        name: "Tomahawk",
        type: "Bittering",
        alpha: 15.5,
        beta: 4.5,
        description: "Part of the Columbus/Tomahak/Zeus (CTZ) group of super high alpha hops. Together these make up 1/4 of US hop acreage. Used for: High alpha hops used primarily for commercial bittering. Substitutes: Tomahawk, Zeus, Nugget, Galena, Chinook"
    },
    {
        name: "Topaz",
        type: "Bittering",
        alpha: 17,
        beta: 6.5,
        description: "Very high alpha hop variety from Australia. Used for commercial production primarily for its high alpha acid content and high bitterness."
    },
    {
        name: "Tradition",
        type: "Bittering",
        alpha: 6,
        beta: 4.5,
        description: "Close descendant of Hallertauer Mittelfrueh bred for high yield. Used for: Lager, Pilsner, Bock, some Weizens Aroma: Fine - similar to Hallertauer Mittelfrueh Substitutes: Hallertauer Mittelfrueh, Liberty, Ultra"
    },
    {
        name: "Ultra",
        type: "Aroma",
        alpha: 3,
        beta: 3.75,
        description: "Triploid seedling of the German Hallertauer Variety Used for: Lager, Pilsner, wheat, finishing hops in ales Aroma: Good to outstanding - some Saaz like qualities Substitutes: Liberty, Hallertauer, Tradition, Saaz"
    },
    {
        name: "Vanguard",
        type: "Aroma",
        alpha: 5.5,
        beta: 6,
        description: "Diploid seedling made in 1982, released in 1997. Hallertau Mitterfrueh parentage. Used for: European lagers, ales Aroma: Strong aromatic notes Substitutes: Hallertauer Mittelfrueh"
    },
    {
        name: "Victoria",
        type: "Bittering",
        alpha: 13,
        beta: 6.25,
        description: "Hi alpha hops grown in Victoria, Australia. It was created in 1976 and entered commercial production in the 1990s. Used for: Primarily for bittering due to high alpha content."
    },
    {
        name: "Warrior",
        type: "Bittering and Aroma",
        alpha: 15,
        beta: 4.75,
        description: "High alpha hops from Yakima Chief Ranches. Also called YCR-5. Mild aroma and low cohumulone content - primarily for bittering. Used for: Ales, stouts Aroma: Neutral, clean, mild Substitutes: Nugget, Columbus, Magnum"
    },
    {
        name: "Whitbread Golding Variet",
        type: "Aroma",
        alpha: 6,
        beta: 2.5,
        description: "Derived in England in 1911 from Bates Brewer. Some Golding characteristics, but lacking the full Goldings aroma. Used for: Ales Aroma: Pleasant, hoppy, slightly intense Substitutes: East Kent Goldings, Progress"
    },
    {
        name: "Willamette",
        type: "Aroma",
        alpha: 5.5,
        beta: 3.5,
        description: "	Used for: Finishing American and British Ales Aroma: Mild, grassy, floral, slightly spicy Substitutes: Fuggles, East Kent Goldings Examples: Sierra Nevada Porter, Ballard Bitter"
    },
    {
        name: "Zeus",
        type: "Bittering",
        alpha: 14,
        beta: 5,
        description: "Super high alpha bittering hops developed in the Yakima Valley, WA Used for: Bittering, intense aroma Aroma: Aromatic, pleasant Substitutes: Other high alpha hops"
    },
]
module.exports = seed_hops;