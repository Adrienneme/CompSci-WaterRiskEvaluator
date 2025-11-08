def ql_to_qn_map(option: str):
  
    option = option.lower().replace(" ", "")

    # --- Water Source ---
    if option == "tap":
        return {"pH": (7.0, 7.4), "turbidity": (0.1, 0.8), "bod": (0.1, 1.0), "do": (6.5, 8.5),
                "nitrate": (0, 3), "temperature": (15, 25), "ecoli": (0, 0), "tds": (50, 250)}
    elif option == "deepwell":
        return {"pH": (6.8, 7.6), "turbidity": (0.1, 1.5), "bod": (0.1, 1.5), "do": (5.5, 8.0),
                "nitrate": (0, 8), "temperature": (18, 26), "ecoli": (0, 0), "tds": (100, 600)}
    elif option == "shallowwell":
        return {"pH": (6.5, 7.4), "turbidity": (1.0, 5.0), "bod": (0.5, 3.0), "do": (5.0, 7.5),
                "nitrate": (5, 30), "temperature": (18, 30), "ecoli": (0, 200), "tds": (100, 400)}
    elif option == "river":
        return {"pH": (6.6, 7.8), "turbidity": (5, 40), "bod": (2.0, 8.0), "do": (4.0, 8.0),
                "nitrate": (1, 25), "temperature": (10, 28), "ecoli": (0, 500), "tds": (50, 300)}
    elif option == "lakepond":
        return {"pH": (6.6, 8.0), "turbidity": (2, 30), "bod": (2.0, 10.0), "do": (3.5, 8.0),
                "nitrate": (0.5, 20), "temperature": (12, 30), "ecoli": (0, 300), "tds": (50, 300)}
    elif option == "reservoirdam":
        return {"pH": (6.8, 7.8), "turbidity": (1, 10), "bod": (1.0, 5.0), "do": (4.0, 8.0),
                "nitrate": (0.5, 15), "temperature": (12, 26), "ecoli": (0, 100), "tds": (60, 300)}
    elif option == "rainwater":
        return {"pH": (5.6, 6.5), "turbidity": (0.05, 0.8), "bod": (0.0, 0.5), "do": (6.0, 9.0),
                "nitrate": (0, 2), "temperature": (10, 25), "ecoli": (0, 0), "tds": (5, 40)}
    elif option == "mountainspring":
        return {"pH": (6.8, 7.4), "turbidity": (0.05, 0.8), "bod": (0.05, 0.8), "do": (6.0, 9.0),
                "nitrate": (0, 3), "temperature": (8, 18), "ecoli": (0, 0), "tds": (20, 200)}
    elif option == "undergroundaquifer":
        return {"pH": (6.9, 7.5), "turbidity": (0.05, 1.0), "bod": (0.05, 1.0), "do": (5.5, 8.0),
                "nitrate": (0, 5), "temperature": (12, 28), "ecoli": (0, 0), "tds": (50, 500)}
    elif option == "coastalwell":
        return {"pH": (6.9, 7.8), "turbidity": (0.5, 4.0), "bod": (0.1, 2.0), "do": (4.0, 7.0),
                "nitrate": (0, 10), "temperature": (18, 28), "ecoli": (0, 20), "tds": (800, 3000)}
    elif option == "irrigationcanal":
        return {"pH": (6.8, 7.8), "turbidity": (5, 60), "bod": (1.0, 6.0), "do": (3.5, 7.0),
                "nitrate": (1, 30), "temperature": (15, 28), "ecoli": (0, 200), "tds": (150, 1200)}

    # --- Color ---
    elif option == "clear":
        return {"turbidity": (0.0, 1.5), "bod": (0.1, 1.0), "ecoli": (0, 2), "pH": (6.8, 7.8), "tds": (10, 150)}
    elif option == "slightlycloudy":
        return {"turbidity": (2, 5), "bod": (0.8, 2.0), "ecoli": (0, 10), "pH": (6.6, 7.6), "tds": (20, 250)}
    elif option == "brownmuddy":
        return {"turbidity": (20, 40), "bod": (3.5, 6.0), "ecoli": (10, 80), "pH": (6.0, 7.4), "tds": (30, 400)}
    elif option == "greenalgal":
        return {"turbidity": (8, 20), "bod": (4.0, 9.0), "phosphate": (0.2, 0.6),
                "nitrate": (8, 20), "ecoli": (5, 80), "pH": (6.5, 8.2), "tds": (30, 300)}
    elif option == "blackgrey":
        return {"turbidity": (50, 100), "bod": (8.0, 14.0), "ecoli": (100, 800), "pH": (5.5, 7.0), "tds": (50, 800)}
    elif option == "yellowish":
        return {"turbidity": (8, 12), "bod": (1.5, 4.0), "nitrate": (10, 25), "pH": (6.2, 7.0),
                "ecoli": (0, 50), "tds": (30, 350)}
    elif option == "reddish":
        return {"turbidity": (25, 40), "bod": (2.5, 6.0), "pH": (5.8, 6.8), "tds": (50, 500),
                "ecoli": (5, 200)}
    elif option == "oilysheen":
        return {"turbidity": (3, 8), "bod": (3.0, 7.0), "ecoli": (0, 100), "pH": (6.5, 7.6), "tds": (50, 600)}

    # --- Odor ---
    elif option == "none":
        return {"bod": (0.1, 2.0), "ecoli": (0, 5), "turbidity": (0.0, 3.0), "pH": (6.8, 7.8), "tds": (10, 300)}
    elif option == "earthymusty":
        return {"bod": (1.5, 4.0), "phosphate": (0.1, 0.4), "ecoli": (0, 30), "turbidity": (2, 8),
                "pH": (6.5, 8.0), "tds": (20, 300)}
    elif option == "sulfurrottenegg":
        return {"pH": (5.5, 6.8), "bod": (2.5, 6.0), "do": (1.5, 6.5), "ecoli": (0, 50),
                "turbidity": (1, 8), "tds": (30, 400)}
    elif option == "chemicals smell" or option == "chemicalsmell":
        return {"bod": (1.5, 6.0), "nitrate": (8, 25), "chloride": (20, 200), "ecoli": (0, 100),
                "turbidity": (1, 6), "tds": (50, 800)}
    elif option == "sewageodor" or option == "sewage":
        return {"bod": (6.0, 12.0), "ecoli": (100, 4000), "turbidity": (10, 60), "do": (0.5, 5.0),
                "nitrate": (10, 60), "tds": (50, 1000)}
    elif option == "fishy smell" or option == "fishy":
        return {"bod": (3.0, 10.0), "nitrate": (5, 20), "phosphate": (0.1, 0.5),
                "ecoli": (10, 300), "turbidity": (3, 15), "tds": (30, 600)}
    elif option == "chlorine smell" or option == "chlorine":
        return {"chloride": (10, 100), "ecoli": (0, 5), "bod": (0.1, 3.0), "turbidity": (0.1, 5.0),
                "pH": (6.5, 7.8), "tds": (50, 300)}
    elif option == "landfillleachate" or option == "landfill":
        return {"bod": (8.0, 20.0), "ecoli": (50, 2000), "turbidity": (10, 60),
                "nitrate": (10, 60), "chloride": (50, 300), "tds": (150, 2000)}

    # --- Nearby Land Use ---
    elif option == "protectedforest":
        return {"turbidity": (0.0, 5.0), "bod": (0.1, 2.0), "ecoli": (0, 20),
                "nitrate": (0, 5), "pH": (6.5, 8.0), "tds": (10, 200)}
    elif option == "agriculture":
        return {"nitrate": (10, 30), "phosphate": (0.1, 1.0), "turbidity": (2, 25),
                "bod": (1.0, 6.0), "ecoli": (0, 200), "tds": (50, 400)}
    elif option == "livestockgrazing":
        return {"ecoli": (50, 2000), "bod": (5.0, 12.0), "nitrate": (10, 40),
                "turbidity": (5, 40), "pH": (6.0, 7.8), "tds": (50, 800)}
    elif option == "industrialsite":
        return {"tds": (200, 3000), "chloride": (50, 1000), "bod": (2.0, 12.0),
                "ecoli": (0, 500), "turbidity": (2, 60), "pH": (4.5, 8.5)}
    elif option == "urbanresidential":
        return {"ecoli": (10, 500), "nitrate": (2, 25), "turbidity": (2, 30),
                "bod": (1.5, 8.0), "tds": (50, 800)}
    elif option == "landfill":
        return {"bod": (8.0, 25.0), "ecoli": (50, 2000), "nitrate": (10, 60),
                "chloride": (50, 300), "tds": (200, 2500)}
    elif option == "miningsite":
        return {"pH": (3.5, 6.0), "tds": (200, 5000), "sulfate": (50, 500),
                "turbidity": (10, 100), "bod": (1.0, 12.0), "ecoli": (0, 200)}
    elif option == "aquaculture":
        return {"bod": (6.0, 18.0), "phosphate": (0.2, 1.0), "nitrate": (5, 30),
                "ecoli": (10, 500), "turbidity": (5, 40), "tds": (50, 1000)}

    # --- Geological Events ---
    elif option == "nonegeological":
        return {"pH": (6.8, 7.8), "turbidity": (0.0, 5.0), "bod": (0.1, 3.0), "do": (5.5, 9.0),
                "nitrate": (0, 10), "temperature": (10, 30), "ecoli": (0, 50), "tds": (10, 400)}
    elif option == "volcanicactivity":
        return {"pH": (4.5, 6.2), "tds": (50, 1000), "chloride": (20, 300), "bod": (0.5, 6.0),
                "ecoli": (0, 200), "turbidity": (5, 80)}
    elif option == "landslideerosion":
        return {"turbidity": (40, 120), "bod": (4.0, 12.0), "nitrate": (2, 20),
                "ecoli": (0, 200), "do": (2.0, 7.0), "tds": (30, 800)}
    elif option == "earthquake":
        return {"turbidity": (10, 60), "ecoli": (10, 500), "bod": (1.0, 10.0),
                "nitrate": (2, 25), "tds": (30, 600)}
    elif option == "soilerosion":
        return {"turbidity": (10, 60), "phosphate": (0.1, 0.6), "nitrate": (2, 20),
                "bod": (1.0, 6.0), "ecoli": (0, 100), "tds": (20, 400)}
    elif option == "landsubsidence":
        return {"tds": (100, 2000), "chloride": (50, 500),
                "turbidity": (5, 50), "ecoli": (0, 200)}

    # --- Weather / Climate Events ---
    elif option == "noneweather":
        return {"pH": (6.8, 7.8), "turbidity": (0.0, 5.0), "bod": (0.1, 3.0),
                "do": (5.5, 9.0), "nitrate": (0, 10), "temperature": (10, 30),
                "ecoli": (0, 50), "tds": (10, 400)}
    elif option == "heavyrainfall":
        return {"turbidity": (40, 120), "ecoli": (50, 2000), "bod": (5.0, 20.0),
                "do": (1.0, 7.0), "nitrate": (5, 40), "tds": (20, 600)}
    elif option == "drought":
        return {"temperature": (15, 35), "tds": (20, 1000), "nitrate": (5, 20),
                "turbidity": (0.5, 25), "ecoli": (0, 200)}
    elif option == "heatwave":
        return {"temperature": (18, 39), "bod": (3.0, 18.0), "do": (1.0, 6.0),
                "ecoli": (0, 500), "tds": (20, 1000)}
    elif option == "typhoon":
        return {"turbidity": (80, 300), "ecoli": (200, 8000), "bod": (10, 40),
                "do": (0.5, 6.0), "nitrate": (5, 50), "tds": (50, 2000)}
    elif option == "stormsurge":
        return {"tds": (500, 6000), "chloride": (200, 2000),
                "turbidity": (5, 60), "ecoli": (0, 500)}

    else:
        return {}
