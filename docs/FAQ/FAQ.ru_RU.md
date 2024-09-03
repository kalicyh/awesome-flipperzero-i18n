```markdown
<a id="top" href="https://github.com/kalicyh/Flipper_Zero_Apps">
 <img src="https://user-images.githubusercontent.com/8518150/179464273-7927420c-b60a-48ab-9eb9-d69b563c0a0b.png" align="center" alt="Flipper Zero FAQ" title="Flipper Zero FAQ">
</a>

<table align="center">
 <tr><th colspan="8">Содержание</th></tr>
 <tr>
    <td><a href="#meta-">Метаданные</a></td>
    <td><a href="#general-">Общие</a></td>
    <td><a href="#sub-ghz-">Sub-GHz</a></td>
    <td><a href="#nfc--rfid-">NFC & RFID</a></td>
    <td><a href="#infrared-">Инфракрасный</a></td>
    <td><a href="#badusb-">BadUSB</a></td>
    <td><a href="#ibutton-">iButton</a></td>
    <td><a href="#wifi-board-">WiFi плата</a></td>
 </tr>
</table>
### Вверх [🔝](#top)
- *Это сообщественный FAQ. Пожалуйста, также рассмотрите возможность прочитать [официальную документацию](https://docs.flipperzero.one/).*
- *Данный текст основан на последнем обновлении прошивки, некоторые вопросы и ответы могут быть неактуальными до (пред)релиза прошивки.*
- *FAQ продолжает обновляться, приветствуются ваши вклады.*

### Другие сообщества

- *Если вы не нашли ответ здесь, вы можете поискать в других сообществах:*

- [Discord](https://flipperzero.one/discord) (проверьте закрепленные сообщения, чтобы узнать, был ли ваш вопрос уже задан, в основном на английском)

- [Telegram](https://t.me/flipperzero) (русский)

- [Форум Flipper](https://forum.flipper.net/) (многоязычный)

- [Reddit](https://old.reddit.com/r/flipperzero/) (многоязычный)

## Метаданные [🔝](#top)

### Что такое Awesome Flipper Zero?

> Это [Awesome List](https://github.com/sindresorhus/awesome/blob/main/awesome.md), созданный мной ([djsime1](https://dj.je)) после получения моего милого дельфина помощника Lurat.

### Что такое Awesome List?

> [Awesome List](https://github.com/sindresorhus/awesome/blob/main/awesome.md) - это сборник ссылок и ресурсов, относящихся к определенному проекту или теме. Это можно рассматривать как централизованную платформу для открытия интересного контента.

### Как я могу внести свой вклад в этот репозиторий?

> Лучше всего открыть [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request), чтобы отправить свои изменения, или связаться со мной любым из способов, описанных в следующем вопросе.

### Я нашел ошибку, плохую ссылку или другую проблему. Что мне делать?

> Откройте [новую дискуссию](https://github.com/djsime1/awesome-flipperzero/discussions/new) в этом репозитории или свяжитесь со мной через [эту страницу](https://dj.je/pages/contact).

### Почему так много неслитых Pull Request'ов?

> Если одновременно есть несколько небольших Pull Request'ов, я обычно объединяю их в одно обновление. Из-за того, как работает GitHub, я не могу пометить их как объединенные во время слияния. Чтобы компенсировать это, я упоминаю вкладчиков как соавторов коммита и упоминаю ID Pull Request в сообщении обновлении.

### Это действительно круто! Я могу сделать вам пожертвование?

> Я очень ценю ваше благородство, но я не принимаю личные денежные пожертвования.
> Если вы действительно настаиваете, я приму подарок виде Discord Nitro ([`@djsime1`](https://discord.gg/9rduBhctJ6)) или игр в Steam ([`/id/djsime1`](https://steamcommunity.com/id/djsime1/)）!
> В противном случае, почему бы не поддержать какую-то местную благотворительную организацию? Я лично рекомендую [Электронную фронтовую организацию](https://supporters.eff.org/donate).

## Общие [🔝](#top)

### Где я могу купить Flipper Zero?

> Вот официальные (повторные) продавцы Flipper Zero. Продавцы вне этого списка могут вводить в заблуждение!
>
> - [**Официальный магазин** *https://shop.flipperzero.one/*](https://shop.flipperzero.one/)
> - [**Lab401** *https://lab401.com/*](https://lab401.com/)
> - [**Joom** *https://flipp.dev/joom-catalog*](https://flipp.dev/joom-catalog)
>
> Чтобы узнать, какие из этих продавцов продают Flipper Zero вашей стране/регионе, вы можете воспользоваться этим сайтом: <https://flipperzero.one/how-to-buy>

### Какую MicroSD карту мне использовать?

> - Лучше выбрать известный бренд (например, SanDisk, Sony и т. д.), так как дешевые карты часто не полностью поддерживают коммуникационные протоколы, используемые Flipper.
> - Вместимость карты должна быть от 4 до 64 ГБ, но карта на 8 ГБ уже будет достаточно.
> - После вставки карты используйте меню настроек Flipper для форматирования (очистки) и тестирования карты.
> - Перед извлечением карты обязательно размонтируйте ее через меню настроек, чтобы избежать повреждения данных.
> - Обратите внимание: вам может понадобиться скрепка или подобный предмет, чтобы вставить извлечь SD-карту из устройства.
> - Для получения дополнительной информации прочитайте [официальную документацию](https://docs.flipperzero.one/basics/sd-card)!

### Как установить базу данных и дампы?

> Убедитесь, что в устройстве установлена рабочая MicroSD карта, следуя шагам выше.
> После загрузки дампа вы можете использовать [qFlipper](https://flipperzero.one/update) или [мобильное приложение Flipper](https://flpr.app/) для передачи файлов. Если вы передаете большой файл или несколько файлов, вы можете извлечь SD-карту из Flipper и вставить ее в компьютер для ускорения передачи.
>
> - В qFlipper: подключите устройство, перейдите на вкладку файлового браузера, найдите SD-карту и перетащите файлы в соответствующие папки (имена папок похожи на расширения файлов).
> - Для мобильного приложения: убедитесь, что соединение через Bluetooth активировано, сохраните файлы в архив приложения и синхронизируйте их обратно на устройство.
> - Для вставки SD-карты в ПК перетащите файлы в соответствующие папки (имена папок похожи на расширения файлов).

### Как установить приложения и плагины?

> Начиная с прошивки v0.87.0, приложения легко загружать на MicroSD карту. Эти приложения можно устанавливать через [мобильное приложение Flipper](https://flpr.app/) или на онлайн-каталоге <https://lab.flipper.net/apps>.

### Как установить пользовательскую прошивку?

> Сначала спросите себя, действительно ли вам это нужно. Конечно, преодоление ограничений передачи Sub-GHz может показаться интересным, но будете ли вы действительно это делать часто? Стоит ли это рисковать?
> Игнорируя предыдущее предложение, убедитесь, что в Flipper установлена рабочая MicroSD карта, а затем перейдите в репозиторий желаемой прошивки. Найдите релиз и найдите файл `.dfu` или пакет обновления (обычно `.tar`, `.tar.gz` или `.zip` файл, обычно содержащий файл с именем `update.fuf`).
>
> - Если у вас есть только файл `.dfu`, его следует установить с помощью опции "Установить из файла" в qFlipper. Выберите файл и начните установку.
> - Если у вас есть пакет обновления, вы можете установить его с помощью [qFlipper](https://flipperzero.one/update) или вручную, следуя шагам ниже через MicroSD карту.
> - Чтобы вручную установить пакет обновления, извлеките и передайте папку (не оригинальный архивный файл) в папку `update` на SD-карте (если папки нет, создайте ее). После завершения передачи, перейдите на экран рабочего стола/ожидания Flipper, нажмите для доступа к файловому браузеру, затем посмотрите все папки слева. Оттуда откройте папку `update` (обычно внизу списка), найдите только что переданную папку. Наконец, выберите файл с именем `update`, выберите "Запустить в приложении" для установки прошивки.
>
> Если нет предварительно собранных файлов/пакетов обновления, вам придется собрать прошивку самостоятельно. Для получения более подробной информации обратитесь к следующему вопросу.
> Для получения дополнительной информации прочитайте [официальную документацию](https://docs.flipperzero.one/basics/firmware-update).

### Когда и где будут проводиться Q&A с разработчиками?

> **Замечание от поддерживающего: не уверен, проводятся ли они до сих пор.**
> Сессии вопросов и ответов проходят каждую субботу в 01:00 и 13:00 (GMT) на [Flipper Discord](https://flipperzero.one/discord).
>
> |    Часовой пояс    |   A сторона |   B сторона |
> | :------: | :---: | :---: |
> | GMT/UTC | 01:00 | 13:00 |
> | Тихокеанское (PDT) | 18:00 | 06:00 |
> | Горное (MDT) | 19:00 | 07:00 |
> | Центральное (CDT) | 20:00 | 08:00 |
> | Восточное (EDT) | 21:00 | 09:00 |
> | Китайское стандартное время | 09:00 | 21:00 |
> | Индийское стандартное время | 06:30 | 18:30 |

<!-- ### Есть ли архивы прошлых вопросов и ответов?
> Архивы - это усилия сообщества, поэтому доступны только некоторые.
> [https://github.com/flipperdevices/flipper-questions-and-answers](https://github.com/flipperdevices/flipper-questions-and-answers) -->

### Как я могу написать/собрать собственные приложения/плагины/прошивки/ресурсы?

> **Замечание от поддерживающего: это требует обновления.**

<blockquote>
 <em>(Ниже приведено резюме <a href="https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/fbt.md">официальной документации FBT</a>.)</em><br>
 С введением <a href="https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/fbt.md">Инструмента сборки Flipper (FBT)</a> это стало очень просто! Вам нужно иметь базовые знания командной строки. Единственное условие - установить <a href="https://git-scm.com/downloads">Git</a>. Также вам следует установить IDE, рекомендуется использовать <a href="https://code.visualstudio.com/">VSCode</a>, так как <a href="https://github.com/flipperdevices/flipperzero-firmware">репозиторий прошивки</a> имеет <a href="https://github.com/flipperdevices/flipperzero-firmware/blob/dev/documentation/fbt.md#vscode-integration">конфигурационные файлы</a> для него.
 <details>
    <summary>Развернуть для остальных шагов.</summary>
    <em>(В процессе, извините за потушение вашего энтузиазма.)</em>
 </details>
</blockquote>

### Могу ли я сделать Flipper сам, а не купить его?

> Вряд ли. Хотя прошивка и схемы в основном являются открытыми, фактическое приобретение компонентов очень сложно. Многие ключевые компоненты, такие как экран, производятся специально для Flipper.

### Как я могу получить Flipper в черной/прозрачной оболочке?

> Это больше невозможно*, черная оболочка была эксклюзивом для поддерживающих Kickstarter, а прозрачная оболочка была выпущена ограниченным тиражом.
> (*если вы не готовы потратить сотни долларов на eBay.)

### Как я могу перевернуть экран/изменить цвет подсветки/заменить корпус и т.д.?

> Это все модификации оборудования, которые обычно не доступны обычным пользователям. Если вы действительно заинтересованы, вы можете поискать или спросить соответствующую информацию, [r/flipperzero](https://old.reddit.com/r/flipperzero/) - неплохое начало.

### Будут ли будущие ревизии оборудования?

> Что касается Flipper Zero, то нет. В 2023 году была небольшая ревизия оборудования для решения нехватки компонентов, но функционально никаких изменений не произошло.
> Планируется выпустить устройство под названием Flipper Nano, которое будет сосредоточено на том, чтобы стать хабом для GPIO. Он не будет оснащен внутренними радиопередатчиками (Sub-GHz, NFC, RFID, IR и т. д.), но GPIO выводы будут удвоены. Для получения дополнительной информации смотрите [видео Talking Sasquach](https://youtu.be/WB86ZOI6DAw).
> Давным-давно был концепт "Flipper One", слухи о котором говорили о чем-то похожем на Pi Zero со SDR и Kali, но в настоящее время нет подтвержденной информации о разработке.

### Что такое Режим Dummy?

> Режим Dummy - это простой переключатель, предназначенный для того, чтобы заставить Flipper выглядеть как портативная игрушка/игровое устройство, запуская конкретные приложения через переназначение кнопок вместо открытия списка приложений.

### Моё устройство зависло, как перезагрузить/исправить его?

> - Чтобы перезагрузить устройство: нажмите и удерживайте кнопки BACK и LEFT, затем одновременно отпустите. Если не работает, *отключите USB-кабель*, затем удерживайте BACK в течение 30 секунд. Это выполнит обычную перезагрузку.
> - Чтобы перейти в режим DFU/восстановления: нажмите и удерживайте BACK и LEFT, затем через несколько секунд отпустите BACK, продолжая удерживать LEFT. Когда экран загорится, вы можете отпустить LEFT.
> - Чтобы выйти из режима DFU/восстановления: следуйте шагам обычной перезагрузки из первого пункта.
>
> Если это не сработает или устройство полностью заблокировано, сначала убедитесь, что оно заряжается, подключив его к источнику питания на 15-30 минут. В качестве крайней меры, если устройство не включается после зарядки, *вытащите USB-кабель*, затем одновременно нажмите OK и BACK в течение 30 секунд. **Никаких индикаций не будет**, но устройство теперь входит в режим восстановления. Подключите его к ПК используйте [qFlipper](https://flipperzero.one/update) для восстановления прошивки.
> Читайте официальную документацию для управления [контролем](https://docs.flipperzero.one/basics/control), [перезагрузкой](https://docs.flipperzero.one/basics/reboot) и [восстановлением прошивки](https://docs.flipperzero.one/basics/firmware-update/firmware-recovery).

### Как получить доступ к CLI/логам?

<blockquote>
 Чтобы получить доступ к серийному CLI, нажмите на свою платформу ниже.
 <details>
    <summary>Десктопный веб-браузер*</summary>
    <em>*Только браузеры на основе Chromium, такие как Google Chrome, Microsoft Edge, Opera/Opera GX, Brave и Vivaldi.</em>
    <ul>
      <li>Подключите ваш Flipper через USB.</li>
      <li>Убедитесь, что qFlipper и другие терминалы отключены.</li>
      <li>Откройте <a href="https://my.flipp.dev/">my.flipp.dev</a> вышеуказанных браузерах.</li>
      <li>Нажмите <kbd>CONNECT</kbd> и выберите "USB Serial Device" из списка.</li>
      <li>Подождите, пока не увидите на экране информацию об устройстве.</li>
      <li>Выберите проект 💻 CLI в левой боковой панели.</li>
      <li><strong>Готово!</strong></li>
    </ul>
 </details>
 <details>
    <summary>Windows</summary>
    <ul>
      <li>Если вы еще не установили <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html">PuTTY</a>.</li>
      <li>Подключите ваш Flipper через USB.</li>
      <li>Откройте qFlipper, найдите COM-порт рядом с названием Flipper. <em>(должен показывать COM, за которым следует число, например, COM1)</em></li>
      <li>Запишите номер COM-порта.</li>
      <li><strong>Закройте qFlipper</strong>, иначе следующие шаги не сработают.</li>
      <li>Откройте PuTTY и убедитесь, что вы находитесь на экране Session.</li>
      <li>Выберите "Serial" в качестве типа соединения.</li>
      <li>Установите серийный порт на номер COM. <em>(только COM, за которым следует число, например, COM1)</em></li>
      <li>Установите скорость на <code>115200</code></li>
      <li><em>Опционально: сохраните настройки сессии для легкого подключения в будущем.</em></li>
      <li>Наконец, нажмите <kbd>Open</kbd> для доступа к CLI.</li>
      <li><strong>Готово!</strong></li>
      <li>Если появляется ошибка "доступ запрещен", убедитесь, что qFlipper не работает!</li>
    </ul>
 </details>
 <details>
    <summary>MacOS/Linux</summary>
    <em>Примечание: я грязный пользователь Windows и не проверял этот процесс. Если есть ошибка, дайте мне знать!</em>
    <ul>
      <li>Если еще не установлен <a href="https://www.gnu.org/software/screen/">GNU Screen</a>.</li>
      <li>Подключите ваш Flipper через USB.</li>
      <li>Откройте qFlipper, найдите путь устройства рядом с именем Flipper. <em>(начинается с /dev/tty)</em></li>
      <li><em>Или: выполните в терминале <code>ls /dev/tty.*</code>.</em></li>
      <li>Запишите полный путь устройства.</li>
      <li><strong>Закройте qFlipper</strong>, иначе следующие шаги не сработают.</li>
      <li>Откройте терминал.</li>
      <li>Выполните <code>screen PATH 115200</code>, заменив PATH на путь к устройству, который вы записали ранее.</li>
      <li><strong>Готово!</strong></li>
    </ul>
 </details>
 <details>
    <summary>Android</summary>
    <ul>
      <li>Если еще не установлен <a href="https://play.google.com/store/apps/details?id=de.kai_morich.serial_usb_terminal">Serial USB Terminal</a>.</li>
      <li>Откройте приложение и перейдите на экран подключения через гамбургер-меню <em>(иконка с 3 горизонтальными линиями)</em></li>
      <li>Подключите ваш Flipper через USB.</li>
      <li>Если не отображается автоматически, нажмите на иконку обновления.</li>
      <li>Разрешите Serial USB Terminal доступ к Flipper (если будет запрошено).</li>
      <li>Если не подключается автоматически, нажмите на иконку соединения в правом верхнем углу <em>(иконка с 2 вилками)</em></li>
      <li><strong>Готово!</strong></li>
      <li><em>Примечание: чтобы выйти из логов, вам нужно отключиться и снова подключиться с помощью иконки.</em></li>
    </ul>
 </details>
 <details>
    <summary>iPhone</summary>
    К сожалению, iOS не может получать доступ к серийному терминалу через USB; попробуйте другие методы.
 </details>
 На Flipper откройте настройки, перейдите в систему и установите уровень логирования на отладочный. <em>(Вы можете оставить отладку отключенной, если только кто-то не попросит вас включить ее)</em>
 Как только вы откроете CLI, введите <code>log</code>, чтобы просмотреть журналы. <em>(Если не отображается, используйте <code>debug</code>, чтобы убедиться, что есть входные данные)</em>
</blockquote>
```

```markdown
## Sub-GHz [🔝](#top)

### Как я могу взломать гараж соседа или разблокировать машину незнакомца?!

> Краткий ответ: вы не можете. Это незаконно, и Flipper не предназначен для этого.

### Что означает "Эта частота может использоваться только для RX в вашем регионе"?

> Из-за юридических ограничений Flipper не может передавать на определённых частотах, в зависимости от конфигурации вашего устройства.
> Конфигурация происходит, когда вы обновляете прошивку через [qFlipper](https://flipperzero.one/update) или [мобильное приложение](https://flpr.app/), основываясь на вашем приблизительном местоположении.

### Как найти частоту устройства/датчика?

> Если это распространённая частота, поднесите устройство *очень близко* к Flipper и используйте анализатор частот.
> Если это не работает, проверьте FCC ID на устройстве. Для устройств, продаваемых в США, FCC ID является обязательным.
> Затем найдите данный ID на [FCC ID.io](https://fccid.io).

### Я не могу отрегулировать Flipper для захвата определенной частоты

> Вам нужно отредактировать файлы `setting_user` и `setting_frequency_analyzer_user`, чтобы изменить частоты, доступные для выбора в приложении. Файлы находятся в папке `subghz/assets` на SD-карте.
> Обратите внимание, что это не разблокирует эти частоты магическим образом, вы всё равно будете ограничены возможностями устройства.

### Я захватил сигнал от гаража/машины и т.д., но при воспроизведении не срабатывает

> Если интересующий вас объект довольно современный, это может быть связано с использованием кода с изменением. Пожалуйста, читайте ниже.

### Что такое скользящий код?

> Можно понять так: предположим, ваш гаражный ворота запрограммированы открываться при получении кода "1234" от датчика.
> Это будет статический код, и реализация атаки воспроизведения (чтение RAW) могла бы открыть гараж.
> Поскольку атака воспроизведения очень проста, большинство устройств меняют код после каждого использования.
> Таким образом, в первый раз, когда вы открываете гараж, датчик отправляет "1234", во второй раз - "5678".
> Скользящие коды не так просты, но вы поняли.

### Я воспроизвел скользящий код, и теперь мой оригинальный пульт/датчик не работает

> Вам нужно вручную снова синхронизировать ваше старое устройство, потому что оно теперь отстает от скользящего кода.

### Что такое Debruin/ brute-force код?

> Брутфорс код пробует каждый возможный код фиксированной длины, но это неэффективно.
> Примеры: 0001, 0002, 0003, 0004 ... 9998, 9999.
> Последовательность Debruin более эффективна, объединяя несколько кодов вместе.
> Примеры: 365, 136 и 650 могут быть найдены, проверяя комбинации из 3 цифр в 13650.

### Могу ли я подключить более мощную антенну?

> Да и нет. Вы не можете напрямую подключить какую-либо антенну через GPIO пины, но вы можете использовать отдельный процессор на прототипной плате и контролировать его с Flipper, при этом вам нужно самому написать код, чтобы это осуществить.
> Например, вы можете написать свой код для NRF24 и контролировать его через GPIO для взаимодействия с Flipper.

## NFC & RFID [🔝](#top)

### Таблица характеристик/совместимости

| Название/тип карты        |  Чтение |  Запись |  Сохранение |  Симуляция | Примечания                  |
| :----------------- | :-: | :-: | :-: | :-: | :----------------------- |
| Mifare Classic    |  ✅  |  ✅  |  ✅  |  ✅  | Симуляция может работать с переменным успехом     |
| Mifare DESFire    |  ✅  |     |     |     | Может читать общие файлы             |
| Mifare Ultralight |  ✅  |     |  ✅  |  ✅  | Есть несколько способов разблокировки меток  |
| NTAG-21X          |  ✅  |     |  ✅  |  ✅  | Очень похож на Mifare Ultralight  |
| EMV карты         |     |     |  ❌  |  ❌  | Чтение общих данных удалено, так как было ошибочно понято. Вернется как приложение от сообщества  |
| NFC-B             |     |     |     |  ❌  | Нет аппаратной поддержки симуляции   |
| iClass/PicoPass   |  ✅  |  ✅  |  ✅  |     |                           |
| EM4100/EM4102     |  ✅  |  ❌  |  ✅  |  ✅  |                           |
| H10301            |  ✅  |  ❌  |  ✅  |  ✅  |                           |
| Indala            |  ✅  |  ❌  |  ✅  |  ✅  | Частичные длины не поддерживаются       |
| T5577             |  ✅  |  ✅  |  ✅  |  ✅  |                           |
| EM4305            |  ✅  |     |  ✅  |  ✅  |                           |
| Paxton Net2       |  ❌  |  ❌  |  ❌  |  ❌  | Нет поддержки Hitag2              |
| Legic Prime       |  ❌  |  ❌  |  ❌  |  ❌  | Закрытый протокол              |

***Ключ:*** *√ = реализовано в последней официальной прошивке. Без меток = возможно, будет реализовано в будущем. ✘ = маловероятно или невозможно реализовать.*

### Как определить тип карты/метки?

> Чтобы определить протокол (NFC, RFID или iClass/PicoPass), вам нужно попробовать прочитать в каждом соответствующем приложении. Если ничего не помогает, проверьте отметки или указатели на метке/карте. В крайнем случае сделайте фото карты/метки и ридера и спросите на [Flipper Discord сервере](https://flipperzero.one/discord).
> Если у вас есть доступ к считывателю карт, вы можете использовать [RFID Detector приложение](https://lab.flipper.net/apps/nfc_rfid_detector) чтобы определить, является ли карта высокой частоты (NFC/iClass/PicoPass) или низкой частоты (RFID).

### Как определить тип NFC метки?

> Запустите операцию "Считать карту" в NFC приложении. Поддерживаются только метки типа NFC-A (Mifare/NTAG/некоторые EMV).
> Как только чтение будет успешным, тип метки будет отображен жирным шрифтом в верхней части экрана.

### Какие NFC метки я могу записать?

> В настоящее время только карты Mifare Classic могут быть записаны.
> В будущем будут добавлены больше меток в обновлении прошивки.

### Мне сказали, что метки Mifare Ultralight/NTAG имеют защищенные паролем сектора. Что это означает?

> Либо чтение было прервано, либо метка действительно защищена паролем.
> Сначала попробуйте снова прочитать метку, но убедитесь, что она находится под устройством до появления информационного экрана.
> Если вы по-прежнему видите предупреждение, Flipper может разблокировать *легально различимые NFC устройства (звучит как "Ameebo")* и метки фильтров воздуха Xaomi, но имейте в виду, что если вы введете неправильный пароль слишком много раз, метка может **сломаться**.

### Почему чтение Mifare Classic занимает так много времени?

> Mifare Classic разделен на сектора, и каждый сектор защищен двумя ключами. Чтобы прочитать Mifare Classic, Flipper использует атаку словаря, которая требует большого списка из 1241 распространенных ключей и проверяет каждый сектор карты по одному. Если вы знаете ключ, вы можете вручную добавить его в меню "Дополнительные действия" приложения NFC.

### Что означает, когда ни один сектор не может быть прочитан в Mifare Classic?

> Данные на карте Mifare Classic разделены на сектора, каждый сектор защищён двумя ключами.
> Если сектора не были прочитаны, то атака словаря Flipper не смогла найти ни одного действительного ключа.
> Если вы знаете ключи, вы можете вручную ввести их в меню "Дополнительные действия" приложения NFC. Иначе, попробуйте использовать атаку mfkey32 на считывателе, как указано в следующем вопросе.

### Что означает, когда некоторые, но не все сектора могут быть прочитаны в Mifare Classic?

> Данные на карте Mifare Classic разделены на сектора, и каждый сектор защищен двумя ключами.
> Чтение не удалось, но и не провалилось. Некоторые данные о карте были прочитаны и сохранены, но не все.
> Даже если не все сектора удалось прочитать, вам все равно следует использовать [мобильное приложение](https://flpr.app/) для проверки дампа, чтобы узнать, необходимы ли потерянные данные. В некоторых редких случаях частично считанная карта может использоваться для симуляции оригинальной карты без проблем.
> Если вам по-прежнему нужны остальные ключи, читайте следующий вопрос.

### Как получить ключи Mifare Classic из ридера? (атака mfkey32)

> Прочитайте эту статью: <https://docs.flipper.net/nfc/mfkey32>

### Почему симуляция Mifare Classic не работает?

> Flipper симулирует Mifare Classic (13.56 MHz) согласно официальной документации, однако некоторые ридеры работают на чуть отличающихся частотах (например, 13.50 MHz). Поскольку Flipper не может определить частоту (как это делают настоящие карты), он также не может исправить эти небольшие ошибки.
> В результате передача данных не всегда происходит в ожидаемое ридером время, поэтому симуляция не идеальна.
> Есть некоторые теоретические способы решить эту проблему через программное обеспечение, но лучший вариант потребует новую аппаратную ревизию.

### Почему я не могу сохранить/симулировать Mifare DESFire?

> DESFire - это очень сложный и более безопасный чипсет. В настоящее время нет известных уязвимостей.

### Что такое .shd файлы в каталоге NFC?

> Это файлы теней, которые создаются при записи метки для симуляции.
> Они хранят копию оригинального файла и записанное содержимое. Таким образом, оригинальный файл остается неизменным.

### Как редактировать данные в сохраненной метке?

> Вам понадобится смартфон с поддержкой NFC и приложение, которое может записывать метки. Одним из наиболее простых приложений является NFC Tools, доступное для [Android](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc) и [iOS](https://apps.apple.com/us/app/nfc-tools/id1252962749). Из-за особенностей симуляции Mifare Classic вы можете редактировать только сохранённые данные меток NTAG и Mifare Ultralight. Если у вас ещё нет NTAG216, вы можете создать пустую метку NTAG216, используя "Ручное добавление" в приложении NFC. Сохраните эту метку, а затем откройте её из списка. После того как вы начнете симуляцию метки, вы можете использовать приложение NFC Tools на смартфоне, чтобы записать информацию на симулируемую метку. Это будет сохранено в файле .shd с тем же именем, что и симулируемая метка. Если вам нужно быстро создать метку с URL, вы можете использовать [инструмент NFC Creator от Flipper Maker](https://flippermaker.github.io/) онлайн.

### Почему симуляция банковской карты не работает?

> Большинство EMV кредитных/дебетовых карт зашифрованы. Информация, прочитанная Flipper, является незашифрованной частью карты. Это недостаточно для симуляции и завершения транзакции. Не удается прочитать зашифрованную часть.

### Есть ли способ сохранить и затем симулировать банковскую карту для авторизации транзакции?

> Нет, это как было описано ранее.

### Почему в таблице характеристик NFC указано, что банковскую карту можно читать?

> Большинство банковских карт с поддержкой NFC открыто показывают номер карты в незашифрованном виде. Срок действия, CVV и почтовый индекс не раскрываются.
> Невозможно создать транзакцию только по номеру карты, поэтому нет оснований добавлять опцию сохранения.

### Может ли Flipper симулировать платежный терминал и авторизовать транзакцию?

> Нет. Вы начинаете видеть шаблон?

### Где функциональность "USB/LibNFC NFC ридера", упомянутая в [сентябрьском блоге](https://blog.flipperzero.one/september-progress/)?

> Из-за нехватки времени эту функцию отменили, больше деталей можно найти в [этом GitHub вопросе](https://github.com/flipperdevices/flipperzero-firmware/issues/1173#issuecomment-1127728562).

### Где я могу узнать больше о технологии NFC и RFID?

> - Введение в низкие и высокие частоты: <https://blog.flipperzero.one/rfid/>
> - Типы NFC <https://www.rfwireless-world.com/Tutorials/NFC-Type1-Tag-vs-NFC-Type2-Tag-vs-NFC-Type3-Tag-NFC-Type4-Tag-Types.html>
> - Mifare Classic: <https://learn.adafruit.com/adafruit-pn532-rfid-nfc/mifare>
> - Серия Mifare: <https://en.wikipedia.org/wiki/MIFARE>
> - Технические спецификации: <http://www.proxmark.org/files/Documents/>
> - Общие стандарты и протоколы RFID: <https://www.asiarfid.com/common-rfid-standards-and-protocols.html>
> - Стандарты RFID: ISO, IEC, EPCglobal: <https://www.electronics-notes.com/articles/connectivity/rfid-radio-frequency-identification/standards-iec-iso-epcglobal.php>

## Инфракрасный [🔝](#top)

### Как добавить больше устройств в меню "Универсальный пульт"?

> Хотя нельзя добавлять новые элементы в универсальное меню, существует множество репозиториев, содержащих дампы ИК пультов. Один из самых популярных - [Flipper-IRDB](https://github.com/logickworkshop/Flipper-IRDB).
> (Примечание: *Настоятельно рекомендуется* вынуть SD-карту из Flipper для загрузки и вставить её непосредственно в компьютер.) Если вам нужен только пульт для конкретного устройства, вы можете использовать [инструмент IR устройств от Flipper Maker](https://flippermaker.github.io/) для онлайн создания и переноса.

### Универсальный телевизионный пульт не работает кроме кнопки питания

> База данных универсального телевизионного пульта по умолчанию содержит в основном коды питания, а других кнопок очень мало. Этот файл (расположенный на SD-карте в `infrared/assets/tv.ir`) может быть вручную заменен на файл, содержащий дополнительные коды для всех кнопок. Чтобы это сделать, скачайте [этот файл](https://raw.githubusercontent.com/UberGuidoZ/Flipper/main/Infrared/tv.ir) и используйте [qFlipper](https://flipperzero.one/update) для передачи его по ранее упомянутому пути.

### Что такое коды CSV/Pronto/IR Plus?

> Это три различных формата инфракрасных баз данных. Они несовместимы с Flipper, но существуют репозитории, которые конвертируют их в совместимую версию, например [Flipper-IRDB](https://github.com/logickworkshop/Flipper-IRDB).

## BadUSB [🔝](#top)

### Я использую нестандартную QWERTY клавиатуру, как сделать так, чтобы скрипт работал?

> Пока не будет решения в прошивке, вы можете попробовать один из следующих конвертеров:
>
> - <http://helppox.com/badusbconvert.html>
> - <https://flippermaker.github.io/> (BadUSB строки в Alt коды)

## iButton [🔝](#top)

> *(в разработке)*

## WiFi плата [🔝](#top)

### Что я могу сделать с Wi-Fi платой?

> Поскольку WiFi плата - это полностью отдельный компьютер в системе Flipper, некоторые задачи могут быть перенесены на интегрированный чип ESP32. В настоящее время два основных применения платы:
>
> - [Прошивка Blackmagic (для отладки прошивки/приложений Flipper)](https://docs.flipper.net/development/hardware/wifi-developer-board)
> - [Прошивка Marauder (для выполнения основных Wi-Fi атак, пожалуйста, не используйте во зло)](https://github.com/justcallmekoko/ESP32Marauder/wiki/flipper-zero)

### Как загрузить прошивку на плату?

> - Прошивка Blackmagic: [используйте ufbt](https://docs.flipper.net/development/hardware/wifi-developer-board/update).
> - Прошивка Marauder: [выберите один из следующих вариантов](https://github.com/justcallmekoko/ESP32Marauder/wiki/update-firmware#using-spacehuhn-web-updater).
> - Прошивка другой прошивки: используйте [приложение ESP Flasher](https://lab.flipper.net/apps/esp_flasher) или [ESPWebTool](https://esp.huhn.me/).
```
