// ================================================================
// УЧЕБНЫЕ МАТЕРИАЛЫ
// ================================================================

const materialsData = [
    {
        subject: 'Математика',
        items: [
            { name: 'Сборник задач', type: '', link:'Mat/Math/Sbornik_zadach.pdf' },
        ]
    },
    {
        subject: 'Физика',
        subgroups: [
            {
                name: 'Лабораторные',
                items: [
                    { name: 'График выполнения лаб', type: 'Вспомогательные', link: 'Mat/Fiz/Grafik_lab.pdf' },
                    { name: 'Изучение погрешностей измерений', type: 'Методичка', link: 'Mat/Fiz/Izuchenie_pogreshnostej.pdf' },
                    { name: 'Яндекс диск с лаб. работами', type: 'Вспомогательные', link: 'https://disk.yandex.by/d/ANeGLA2T3SQSTs' },
                ]
            },
            {
                name: 'Практика',
                items: [
                    { name: 'Старый сборник задач', type: 'Вспомогательное', link: 'Mat/Fiz/Old_volkenshtein_sbornik.pdf' },
                ]
            },
            {
                name: 'Лекции',
                items: [
                    { name: 'Экзаменационные вопросы', type: 'Вспомогательное', link: 'Mat/Fiz/Examenacionye_voprosy.pdf' },
                    { name: 'Трофимова Т.И. "Курс физики"', type: 'Учебник' },
                    {
                        name: 'Савельев И.В. "Курс общей физики"',
                        type: 'Учебник',
                        volumes: [
                            { label: 'Том 1. Механика. Молекулярная физика' },
                            { label: 'Том 2. Электричество и магнетизм. Волны. Оптика' }
                        ]
                    },
                    {
                        name: 'Сивухин Д.В. "Курс физики"',
                        type: 'Учебник',
                        volumes: [
                            { label: 'Том 1. Механика' },
                            { label: 'Том 2. Термодинамика и молекулярная физика' }
                        ]
                    },
                    { name: 'Фейнмановские лекции по физике', type: 'Учебник' },
                ]
            }
        ]
    },
    {
        subject: 'Химия',
        items: [
            { name: 'Номера ИДЗ', type: 'Вспомогательные', link: 'Mat/Xim/Nomera_idz.pdf' },
            { name: 'Задания ИДЗ. Гл1-4', type: 'Вспомогательные', link: 'Mat/Xim/Zadanya_idz.pdf' },
            { name: 'Гл1. Основные классы неорганических соединений', type: 'Презентация', link: 'Mat/Xim/1_osn_klas_neorg_soedinenyi.ppt' },
        ]
    },
    {
        subject: 'Инженерная графика',
        items: [
            { name: '', type: '' },
        ]
    },
    {
        subject: 'Технология конструкционных материалов',
        items: [
            { name: 'Комаров О.С. "Технология конструкционных материалов"', type: 'Учебник' },
            { name: 'Дальский А.М. "Технология конструкционных материалов"', type: 'Учебник' },
            { name: 'Кузьмин Б.А. "Технология металлов и конструкционных материалов"', type: 'Учебник' },
            { name: 'Солнцев В.П. "Металловедение и технология металлов"', type: 'Учебник' },
        ]
    },
    {
        subject: 'Английский язык',
        items: [
            { name: 'Механика. Английский для студентов-машиностроителей', type: 'Учебник', link: 'Mat/Eng/Mekhanika_Anglijskij_dlya_studentov-mashinostroitelej.pdf' },
            { name: 'Первый учебник', type: 'Учебник', link: 'Mat/Eng/Metodicheskoe_posobie_po_obucheniyu.pdf'}
        ]
    }
];
