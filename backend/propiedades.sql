SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";




--
-- Base de datos: `inmobiliarias`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `propiedades`
--

CREATE TABLE `propiedades` (
  `id` int(11) NOT NULL,
  `ubicacion` text NOT NULL,
  `tipo` text NOT NULL,
  `precio` int(11) NOT NULL,
  `habitaciones` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `propiedades`
--

INSERT INTO `propiedades` (`id`, `ubicacion`, `tipo`, `precio`, `habitaciones`) VALUES
(1, 'Tokyo', '', 500000, 4),
(2, 'New York', '', 150000, 2),
(3, 'Londres', '', 1000000, 0),
(4, 'París', '', 800000, 5),
(5, 'Sydney', '', 400000, 3),
(6, 'Roma', '', 600000, 4),
(7, 'Madrid', '', 250000, 2),
(8, 'Toronto', '', 500000, 0),
(9, 'Moscú', '', 900000, 6),
(10, 'Singapur', '', 350000, 3),
(11, 'Estambul', '', 700000, 5),
(12, 'Nueva Delhi', '', 200000, 2),
(13, 'Melbourne', '', 750000, 4),
(14, 'San Francisco', '', 300000, 2),
(15, 'Buenos Aires', '', 400000, 3),
(16, 'Mumbai', '', 180000, 2),
(17, 'Shanghai', '', 550000, 4),
(18, 'Ciudad de México', '', 220000, 2),
(19, 'Hong Kong', '', 950000, 6),
(20, 'Johannesburgo', '', 120000, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `propiedades`
--
ALTER TABLE `propiedades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;
COMMIT;


