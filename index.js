/**Функция для загрузки первого файла, проверки на наличие его, имитация проверки (3с), случайный выбор
 * одного из варианта (Проверено <-> Отклонено) с соответсвующим преобразованием SVG, заголовка,
 * подзаголовка и статуса*/
function OnChangeFirst() {
    let name_file_first = document.getElementById("firstlist-uploadbtn").files[0].name;
    if (name_file_first) {
        let image = document.getElementById('image-firstlist');
        let status = document.getElementById('firstlist-status');
        let title = document.getElementById('firstlist-title');
        let subtitle = document.getElementById('firstlist-subtitle');
        let size = Math.round(document.getElementById("firstlist-uploadbtn").files[0].size / 1000);
        image.innerHTML = '<object type=\"image/svg+xml\" data=\"./src/wait.svg\"><\/object>';
        status.innerHTML = '<span style="color:#999999">Идёт проверка</span>';
        title.innerHTML = 'Файл загружен';
        subtitle.innerHTML = name_file_first + ' (' + size + ' Кб)';

        /**рандомайзер от 0 до 10 с дальнейшем условием выбора статуса*/
        function Randomize(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            if (rand > 5) {
                image.innerHTML = '<object type=\"image/svg+xml\" data=\"./src/ok.svg\"><\/object>';
                status.innerHTML = '<span style="color:#77B53C">Проверено</span>';
                title.innerHTML = 'Страница с фотографией';
            } else {
                image.innerHTML = '<object type=\"image/svg+xml\" data=\"./src/upload.svg\"><\/object>';
                status.innerHTML = '<span style="color:#cc3333">Отклонено</span>';
                title.innerHTML = 'Загрузить скан странцы с фотографией';
                subtitle.innerHTML = 'Размер файла не более 5Мб';
                document.getElementById("firstlist-uploadbtn").value = '';//удаление имени файла при отказе
            }
        }

        setTimeout(function () {
            Randomize(0, 10);
        }, 3000);
    }
}

/**Функция для загрузки второго файла*/
function OnChangeSecond() {
    let name_file_second = document.getElementById("secondlist-uploadbtn").files[0].name;
    if (name_file_second) {
        let image = document.getElementById('image-secondlist');
        let status = document.getElementById('secondlist-status');
        let title = document.getElementById('secondlist-title');
        let subtitle = document.getElementById('secondlist-subtitle');
        let size = Math.round(document.getElementById("secondlist-uploadbtn").files[0].size / 1000);
        image.innerHTML = '<object type=\"image/svg+xml\" data=\"./src/wait.svg\"><\/object>';
        status.innerHTML = '<span style="color:#999999">Идёт проверка</span>';
        title.innerHTML = 'Файл загружен';
        subtitle.innerHTML = name_file_second + ' (' + size + ' Кб)';

        /**рандомайзер от 0 до 10 с дальнейшем условием выбора статуса*/
        function Randomize(min, max) { //рандомайзер от 0 до 10
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            if (rand > 5) { //условие для случайного выбора
                image.innerHTML = '<object type=\"image/svg+xml\" data=\"./src/ok.svg\"><\/object>';
                status.innerHTML = '<span style="color:#77B53C">Проверено</span>';
                title.innerHTML = 'Страница с фотографией';
            } else {
                image.innerHTML = '<object type=\"image/svg+xml\" data=\"./src/upload.svg\"><\/object>';
                status.innerHTML = '<span style="color:#cc3333">Отклонено</span>';
                title.innerHTML = 'Загрузить скан странцы с фотографией';
                subtitle.innerHTML = 'Размер файла не более 5Мб';
                document.getElementById("secondlist-uploadbtn").value = '';//удаление имени файла при отказе
            }
        }

        setTimeout(function () {
            Randomize(0, 10);
        }, 3000);
    }
}
