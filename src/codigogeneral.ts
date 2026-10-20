/**Escenario
Una tienda comercializa productos de libros y tecnología. Al finalizar el día, 
necesita conocer cuáles ventas fueron pagadas, cuánto dinero ingresó y qué productos tecnológicos se vendieron
El equipo de desarrollo debe implementar estas consultas utilizando programación funcional con TypeScript, 
sin modificar los datos originales.

Filtrado y transformación
1.Obtener todas las ventas pagadas utilizando filter().
2.Obtener un arreglo que contenga únicamente los importes de las ventas pagadas utilizando map().
3. Listar los nombres de los productos de tecnología que fueron pagados.

Reducción y agregación
4.Calcular la facturación total de las ventas pagadas utilizando reduce().
5.Contar cuántas ventas están pendientes de pago utilizando filter().
6.Calcular el importe total pendiente de cobro utilizando filter() y reduce().

? */

type Venta = {
  producto: string;
  categoria: "libros" | "tecnologia";
  importe: number;
  pagada: boolean;
};

const ventas: Venta[] = [
  { producto: "Libro TypeScript", categoria: "libros", importe: 25000, pagada: true },
  { producto: "Mouse", categoria: "tecnologia", importe: 18000, pagada: true },
  { producto: "Teclado", categoria: "tecnologia", importe: 45000, pagada: false },
  { producto: "Libro Clean Code", categoria: "libros", importe: 32000, pagada: true },
  { producto: "Monitor", categoria: "tecnologia", importe: 150000, pagada: true },
  { producto: "Auriculares", categoria: "tecnologia", importe: 28000, pagada: false }
];

//1
const ventasPagadas = ventas.filter(venta => venta.pagada);
//2
const importesVentasPagadas = ventasPagadas.map(venta => venta.importe);
//3
const productosTecnologiaPagadas = ventasPagadas
  .filter(venta => venta.categoria === "tecnologia")
  .map(venta => venta.producto);

//4
const facturacionTotal = ventasPagadas.reduce((total, venta) => total + venta.importe, 0);
//5
const ventasPendientes = ventas.filter(venta => !venta.pagada);
//6
const importeTotalPendiente = ventasPendientes.reduce((total, venta) => total + venta.importe, 0);

