const data = {
    coloreOcchi:["Azzurro", "Azzurro fiordaliso", "Argento", "Acquamarina", "Ambra", "Cobalto", "Blu ceruleo", "Ceruleo", "Denim chiaro", "Fiore di granoturco", "Indaco elettrico", "Lavanda", "Ametista", "Eliotropo", "Fucsia", "Glicine", "Indaco", "Melanzana", "Magenta chiaro", "Rosa vivo", "Rosa shocking", "Vinaccia", "Violetto", "Borgogna", "Cremisi", "Lampone", "Rosso fragola", "Rosso veneziano", "Scarlatto", "Vermiglio", "Cardo", "Albicocca", "Bianco navajo", "Crema", "Fulvo", "Limone", "Oro vecchio", "Solidago", "Sabbia", "Tennè", "Terra di Siena", "Tronco", "Rosso sangue", "Grigio 80%", "Grigio 50%", "Grigio 15%", "Giallo miele", "Bianco di titanio", "Anguria", "Arancione", "Camoscio", "Celadon", "Castagno scuro", "Catrame", "Foglia di tè", "Giada", "Pera", "Ottanio", "Verde primavera", "Verde menta", "Verde muschio", "Verde oliva scuro", "Verde olivastro", "Verde pastello"],    
    
    coloreCapelli:["Cenere", "Irisè", "Dorato", "Rame", "Mogano", "Rosso", "Mat", "Moka", "Azzurro", "Azzurro fiordaliso", "Argento", "Acquamarina", "Ambra", "Cobalto", "Blu ceruleo", "Ceruleo", "Denim chiaro", "Fiore di granoturco", "Indaco elettrico", "Lavanda", "Ametista", "Eliotropo", "Fucsia", "Glicine", "Indaco", "Melanzana", "Magenta chiaro", "Rosa vivo", "Rosa shocking", "Vinaccia", "Violetto", "Borgogna", "Cremisi", "Lampone", "Rosso fragola", "Rosso veneziano", "Scarlatto", "Vermiglio", "Cardo", "Albicocca", "Bianco navajo", "Crema", "Fulvo", "Limone", "Oro vecchio", "Solidago", "Sabbia", "Tennè", "Terra di Siena", "Tronco", "Rosso sangue", "Grigio 80%", "Grigio 50%", "Grigio 15%", "Giallo miele", "Bianco di titanio", "Anguria", "Arancione", "Camoscio", "Celadon", "Castagno scuro", "Catrame", "Foglia di tè", "Giada", "Pera", "Ottanio", "Verde primavera", "Verde menta", "Verde muschio", "Verde oliva scuro", "Verde olivastro", "Verde pastello"],

    altezza:["1.35", "1.40", "1.45", "1.50", "1.55", "1.60", "1.65", "1.70", "1.75", "1.80", "1.85", "1.90", "1.95", "2.00"],

    età: ["13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "43", "44", "45"],

    taglioCapelli:["Frangia laterale", "Riga in mezzo", "Riga destra", "Riga sinistra", "Rasati al lato", "Scalati con frangia lunga", "Scalati con frangia see-through", "Shag cut con frangia", "Liscio scalato con frangia sfilata", "Liscio con frangetta laterale", "Ricci", "Mossi", "Frangetta sugli occhi", "Scompigliati", "Wolfcut", "Mullet", "Pixie", "Bob", "Asimmetrico", "Afro"],

    lunghezzaCapelli:["5", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55", "60", "65"],

    accessori:["Occhiali", "Elastico", "Orologio", "Orecchini", "Collana", "Anelli", "Piercing", "Nail art", "Fermaglietto", "Currie", "Guanti", "Lente colorata", "Sticker", "Cibo", "Zaino", "Borsa", "Catene", "Telefono", "Libro", "Bambola", "Elementi naturali"],

    colorePelle:["Albino", "Molto chiara toni freddi", "Molto chiara tono neutro", "Molto chiara toni caldi", "Chiara toni freddi", "Chiara tono neutro", "Chiara toni caldi", "Mixed toni freddi", "Mixed tono neutro", "Mixed toni caldi", "Scura toni treddi", "Scura tono neutro", "Scura toni caldi", "Molto scura toni freddi", "Molto scura tono neutro", "Molto scura toni caldi"],

    particolarità: ["Lentiggini", "Voglie", "Nei", "Ciuffo di capelli di colore diverso", "Sclera colorata", "Pupille non rotonde", "Occhi a mandorla", "Tatuaggio"],

    personalità:["Timida", "Estroversa", "Introversa", "Autorevole", "Sottona", "Sadica", "Masochista", "Cattivo", "Buono", "Triste", "Felice", "Arrabbiato", "Calmo", "Flirty", "Antipatico", "Presuntuoso", "Agitato", "Digustato"],

    sesso: ["Maschio", "Femmina"],

    stileVestiario: ["Lolita", "Militare", "Vittoriano", "Techno tradizionale", "Gangsta", "Sporty glam", "Romantico", "Hippie", "Geek", "Minimalista", "Bonton", "Maggiordomo/Maid", "Punk", "Boho chic", "Country", "Etnico", "Androgino", "Indie", "Pin up", "Scene queen", "Street style", "Coreano", "Vintage", "Normcore", "Athleisure", "Sporty chic", "Parigino", "Emo", "Roch", "Grunge", "Gotico", "Hipster", "Fashion", "Dandy", "Navy", "Preppy", "Hip hop", "Skater", "E-girl/boy", "VSCO", "Cottagecore", "Arty", "Baddie", "Retro vintage", "Y2K", "Mod", "80s", "Casual", "Dark academia", "Western"],

    tipo: ["Umano", "Oversize", "Vampiro", "Fata", "Sirena", "Stregone", "Alchimista", "Stalker", "Cantante", "Principe/Principessa", "Re/Regina", "Contadino", "Angelo", "Demone", "Elfo", "Fantasma", "Orecchie e cosa", "Divinità", "Mostro", "Killer"]
}

export default data