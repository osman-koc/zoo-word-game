dbWords = [
    {
        "name": "TAVLA",
        "relations": [
            "ZAR",
            "OYUN",
            "YENMEK",
            "MARS",
            "KAPI"
        ]
    },
    {
        "name": "YENMEK",
        "relations": [
            "TAVLA",
            "ZAR",
            "MARS",
            "KAPI",
            "OYUN"
        ]
    },
    {
        "name": "MARS",
        "relations": [
            "TAVLA",
            "ZAR",
            "YENMEK",
            "KAPI",
            "OYUN"
        ]
    },
    {
        "name": "KAPI",
        "relations": [
            "TAVLA",
            "ZAR",
            "YENMEK",
            "MARS",
            "OYUN"
        ]
    },
    {
        "name": "OYUN",
        "relations": [
            "TAVLA",
            "ZAR",
            "YENMEK",
            "MARS",
            "KAPI"
        ]
    },
    {
        "name": "ZAR",
        "relations": [
            "TAVLA",
            "YENMEK",
            "MARS",
            "KAPI",
            "OYUN"
        ]
    },
    {
        "name": "GOOGLE",
        "relations": [
            "ARAMA MOTORU",
            "BİLGİSAYAR",
            "İNTERNET",
            "SİTE",
            "SAYFA"
        ]
    },
    {
        "name": "ARAMA MOTORU",
        "relations": [
            "GOOGLE",
            "BİLGİSAYAR",
            "İNTERNET",
            "SİTE",
            "SAYFA"
        ]
    },
    {
        "name": "BİLGİSAYAR",
        "relations": [
            "GOOGLE",
            "ARAMA MOTORU",
            "İNTERNET",
            "SİTE",
            "SAYFA"
        ]
    },
    {
        "name": "İNTERNET",
        "relations": [
            "GOOGLE",
            "ARAMA MOTORU",
            "BİLGİSAYAR",
            "SİTE",
            "SAYFA"
        ]
    },
    {
        "name": "SİTE",
        "relations": [
            "GOOGLE",
            "ARAMA MOTORU",
            "BİLGİSAYAR",
            "İNTERNET",
            "SAYFA"
        ]
    },
    {
        "name": "SAYFA",
        "relations": [
            "GOOGLE",
            "ARAMA MOTORU",
            "BİLGİSAYAR",
            "İNTERNET",
            "SİTE"
        ]
    },
    {
        "name": "BILL GATES",
        "relations": [
            "ZENGİN",
            "MICROSOFT",
            "PARA",
            "PC",
            "WINDOWS"
        ]
    },
    {
        "name": "ZENGİN",
        "relations": [
            "BILL GATES",
            "MICROSOFT",
            "PARA",
            "PC",
            "WINDOWS"
        ]
    },
    {
        "name": "MICROSOFT",
        "relations": [
            "BILL GATES",
            "ZENGİN",
            "PARA",
            "PC",
            "WINDOWS"
        ]
    },
    {
        "name": "PARA",
        "relations": [
            "BILL GATES",
            "ZENGİN",
            "MICROSOFT",
            "PC",
            "WINDOWS"
        ]
    },
    {
        "name": "PC",
        "relations": [
            "BILL GATES",
            "ZENGİN",
            "MICROSOFT",
            "PARA",
            "WINDOWS"
        ]
    },
    {
        "name": "WINDOWS",
        "relations": [
            "BILL GATES",
            "ZENGİN",
            "MICROSOFT",
            "PARA",
            "PC"
        ]
    },
    {
        "name": "OKEY",
        "relations": [
            "ZAR",
            "ISTAKA",
            "TAŞ",
            "4 KİŞİ",
            "OYUN"
        ]
    },
    {
        "name": "ISTAKA",
        "relations": [
            "OKEY",
            "ZAR",
            "TAŞ",
            "4 KİŞİ",
            "OYUN"
        ]
    },
    {
        "name": "TAŞ",
        "relations": [
            "OKEY",
            "ISTAKA",
            "ZAR",
            "4 KİŞİ",
            "OYUN"
        ]
    },
    {
        "name": "4 KİŞİ",
        "relations": [
            "OKEY",
            "ISTAKA",
            "TAŞ",
            "ZAR",
            "OYUN"
        ]
    },
    {
        "name": "ZAR",
        "relations": [
            "OKEY",
            "ISTAKA",
            "TAŞ",
            "4 KİŞİ",
            "OYUN"
        ]
    },
    {
        "name": "OYUN",
        "relations": [
            "OKEY",
            "ISTAKA",
            "TAŞ",
            "4 KİŞİ",
            "ZAR"
        ]
    },
    {
        "name": "PARA",
        "relations": [
            "KAĞIT",
            "DOLAR",
            "SATINALMA",
            "ÜLKE",
            "KAZANMAK"
        ]
    },
    {
        "name": "KAĞIT",
        "relations": [
            "PARA",
            "DOLAR",
            "SATINALMA",
            "ÜLKE",
            "KAZANMAK"
        ]
    },
    {
        "name": "DOLAR",
        "relations": [
            "PARA",
            "KAĞIT",
            "SATINALMA",
            "ÜLKE",
            "KAZANMAK"
        ]
    },
    {
        "name": "SATINALMA",
        "relations": [
            "PARA",
            "KAĞIT",
            "DOLAR",
            "ÜLKE",
            "KAZANMAK"
        ]
    },
    {
        "name": "ÜLKE",
        "relations": [
            "PARA",
            "KAĞIT",
            "DOLAR",
            "SATINALMA",
            "KAZANMAK"
        ]
    },
    {
        "name": "KAZANMAK",
        "relations": [
            "PARA",
            "KAĞIT",
            "DOLAR",
            "SATINALMA",
            "ÜLKE"
        ]
    },
    {
        "name": "ÇORAP",
        "relations": [
            "İNCE",
            "KAÇMAK",
            "TEN RENGİ",
            "PARİZYEN",
            "AYAK"
        ]
    },
    {
        "name": "İNCE",
        "relations": [
            "ÇORAP",
            "KAÇMAK",
            "TEN RENGİ",
            "PARİZYEN",
            "AYAK"
        ]
    },
    {
        "name": "KAÇMAK",
        "relations": [
            "ÇORAP",
            "İNCE",
            "TEN RENGİ",
            "PARİZYEN",
            "AYAK"
        ]
    },
    {
        "name": "TEN RENGİ",
        "relations": [
            "ÇORAP",
            "İNCE",
            "KAÇMAK",
            "PARİZYEN",
            "AYAK"
        ]
    },
    {
        "name": "PARİZYEN",
        "relations": [
            "ÇORAP",
            "İNCE",
            "KAÇMAK",
            "TEN RENGİ",
            "AYAK"
        ]
    },
    {
        "name": "AYAK",
        "relations": [
            "ÇORAP",
            "İNCE",
            "KAÇMAK",
            "TEN RENGİ",
            "PARİZYEN"
        ]
    },
    {
        "name": "KALEM",
        "relations": [
            "KURŞUN",
            "TÜKENMEZ",
            "DOLMA",
            "KAĞIT",
            "ÇİZGİ"
        ]
    },
    {
        "name": "KURŞUN",
        "relations": [
            "KALEM",
            "TÜKENMEZ",
            "DOLMA",
            "KAĞIT",
            "ÇİZGİ"
        ]
    },
    {
        "name": "TÜKENMEZ",
        "relations": [
            "KALEM",
            "KURŞUN",
            "DOLMA",
            "KAĞIT",
            "ÇİZGİ"
        ]
    },
    {
        "name": "DOLMA",
        "relations": [
            "KALEM",
            "KURŞUN",
            "TÜKENMEZ",
            "KAĞIT",
            "ÇİZGİ"
        ]
    },
    {
        "name": "KAĞIT",
        "relations": [
            "KALEM",
            "KURŞUN",
            "TÜKENMEZ",
            "DOLMA",
            "ÇİZGİ"
        ]
    },
    {
        "name": "ÇİZGİ",
        "relations": [
            "KALEM",
            "KURŞUN",
            "TÜKENMEZ",
            "DOLMA",
            "KAĞIT"
        ]
    },
    {
        "name": "KALEM",
        "relations": [
            "KURŞUN",
            "TÜKENMEZ",
            "DOLMA",
            "KAĞIT",
            "ÇİZGİ"
        ]
    },
    {
        "name": "KURŞUN",
        "relations": [
            "KALEM",
            "TÜKENMEZ",
            "DOLMA",
            "KAĞIT",
            "ÇİZGİ"
        ]
    },
    {
        "name": "AŞK",
        "relations": [
            "KALP",
            "TUTKU",
            "KIRMIZI"
        ]
    },
    {
        "name": "KALP",
        "relations": [
            "AŞK",
            "TUTKU",
            "KIRMIZI"
        ]
    },
    {
        "name": "TUTKU",
        "relations": [
            "AŞK",
            "KALP",
            "KIRMIZI"
        ]
    },
    {
        "name": "KIRMIZI",
        "relations": [
            "AŞK",
            "KALP",
            "TUTKU"
        ]
    },
    {
        "name": "KALP",
        "relations": [
            "AŞK",
            "TUTKU",
            "KIRMIZI"
        ]
    },
    {
        "name": "TUTKU",
        "relations": [
            "AŞK",
            "KALP",
            "KIRMIZI"
        ]
    },
    {
        "name": "KIRMIZI",
        "relations": [
            "AŞK",
            "KALP",
            "TUTKU"
        ]
    },
    {
        "name": "KALP",
        "relations": [
            "AŞK",
            "TUTKU",
            "KIRMIZI"
        ]
    },
    {
        "name": "TUTKU",
        "relations": [
            "AŞK",
            "KALP",
            "KIRMIZI"
        ]
    },
    {
        "name": "KIRMIZI",
        "relations": [
            "AŞK",
            "KALP",
            "TUTKU"
        ]
    },
    {
        "name": "KALP",
        "relations": [
            "AŞK",
            "TUTKU",
            "KIRMIZI"
        ]
    }
]