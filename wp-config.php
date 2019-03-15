<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'timemov1_wp' );

/** MySQL database username */
define( 'DB_USER', 'timemov1_wp' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Reddy!9703303388' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '7lUe1-ErS[tGsX-vJ|MI;Yb3-X+y[H0{i~4.4?6^iU0Nd(3#WXcdu4wdSBt@jQ b' );
define( 'SECURE_AUTH_KEY',  '13KDfO9VB7(9&@m%wb~if8=sqUX1][!4?9C@YY!(~l _:M>I@1kL[lYI.Id[-<z6' );
define( 'LOGGED_IN_KEY',    '0~.!7$vZE^gmT%WMh_jZ#[@1m Bz0M{FyO7o73L(t&L:[^sME.3UzeCK<a$uC=9Y' );
define( 'NONCE_KEY',        'sIW|1<JqeHaOLc0}e34U752)::CfFb]opNPB;w;.10Dh9Fg#_M|G{P`}haae-hn#' );
define( 'AUTH_SALT',        'lXp/x|/c *e+nVX]Ofe/O}TM!X3F1ZKZ,My`jU8g!J]#pcE:0;Kr{OeO;>&m,$*9' );
define( 'SECURE_AUTH_SALT', 'N k88WRR2Mq7p!L:%{My1KU4-gea0qmi8|TBDDL,OGzZkR tHE?_P@epe^0}j=u)' );
define( 'LOGGED_IN_SALT',   'sHoz [A(9<A;PRfDb3iy#FNo<M75t>@nl~ng#1YX$t_=,olFL(YWCt<R5&3>a`.g' );
define( 'NONCE_SALT',       'K<dSmfUg2r+oJ&4*7TM--lp~*d~ #8of/)soEFzq8k-1M$Pp#<:8`r-%vAog,Eba' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
