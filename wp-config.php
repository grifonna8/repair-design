<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'repair' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'repair-admin' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'dWZarzhCj4iXg6XE' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'K0=m@lV<i~_aDHn|#3$%HMc1-.EEU>s[*pypE8w9xUk5GUSm8?CI~L6?Z@I:w 7|' );
define( 'SECURE_AUTH_KEY',  '4$UhrmD_|eRKWFtI-Pw91b0=GpcA$CGnJP#Aa0G,q6Z}1p0-)tN8;mag[BLsG!nf' );
define( 'LOGGED_IN_KEY',    'p)Q0HC[Q`EZ@ ,:V{Z?@#Xq29yG]zid@%T|D-C>0-J2wPsVP$%S`*Zfzx} Y4ChG' );
define( 'NONCE_KEY',        'G.DJz$l(}3[l#2O;D[0RZsEbh +2O,8e0D:[@[{^%<F@.=Ak2q.&,hD+B/?[vbOS' );
define( 'AUTH_SALT',        'IsVqn_y&w7U7TXu8xyl;6*Hr Hy?NVw h=dg`7g2.GAmYI*DgK(e!2u+l_i7-EEY' );
define( 'SECURE_AUTH_SALT', 'qp|7M$<r#BVFt2*90yH+MWK,XnVF)N:@uRd-={n>Bn.V8JA_j,4W+edsvDEoz1lv' );
define( 'LOGGED_IN_SALT',   'sy6xLNvCnBF{z+c<=xGk>}]~-VEl`w&19PjD=yscp]glvvL[ICXMYoN0(H7?8:E1' );
define( 'NONCE_SALT',       '_Hee!d*aYp0<4t&iji$IW7qZUju8?Kb;7fvn_c}Z,)EPX`ZDp8tic-V;{FjYuw`6' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
