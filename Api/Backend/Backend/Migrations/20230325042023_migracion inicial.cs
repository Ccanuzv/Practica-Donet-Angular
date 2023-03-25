using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class migracioninicial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Usuarios",
                columns: table => new
                {
                    UsuarioId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    UsuarioNombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UsuarioEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UsuarioPass = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UsuarioFechaNacimiento = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuarios", x => x.UsuarioId);
                });

            migrationBuilder.CreateTable(
                name: "Recuperaciones",
                columns: table => new
                {
                    RecuperacionId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RecuperacionEstado = table.Column<bool>(type: "bit", nullable: false),
                    RecuperacionFechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RecuperacionUsuarioId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Recuperaciones", x => x.RecuperacionId);
                    table.ForeignKey(
                        name: "FK_Recuperaciones_Usuarios_RecuperacionUsuarioId",
                        column: x => x.RecuperacionUsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "venta_cliente",
                columns: table => new
                {
                    ClienteId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClienteNombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClienteNIT = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClienteDireccion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClienteTelefono = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClienteEmail = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ClienteEstado = table.Column<bool>(type: "bit", nullable: false),
                    ClienteFechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ClienteUsuarioId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_venta_cliente", x => x.ClienteId);
                    table.ForeignKey(
                        name: "FK_venta_cliente_Usuarios_ClienteUsuarioId",
                        column: x => x.ClienteUsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "venta_servicio",
                columns: table => new
                {
                    ServicioId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ServicioNombre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServicioDescripcion = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServicioMontoCosto = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ServicioMontoVenta = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    ServicioEstado = table.Column<bool>(type: "bit", nullable: false),
                    ServicioFechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ServicioUsuarioId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_venta_servicio", x => x.ServicioId);
                    table.ForeignKey(
                        name: "FK_venta_servicio_Usuarios_ServicioUsuarioId",
                        column: x => x.ServicioUsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "venta_cliente_servicio",
                columns: table => new
                {
                    ClienteServicioId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClienteServicioEstado = table.Column<bool>(type: "bit", nullable: false),
                    ClienteServicioFechaCreacion = table.Column<DateTime>(type: "datetime2", nullable: false),
                    ClienteServicioClienteId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    ClienteServicioServicioId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    ClienteServicioUsuarioId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_venta_cliente_servicio", x => x.ClienteServicioId);
                    table.ForeignKey(
                        name: "FK_venta_cliente_servicio_Usuarios_ClienteServicioUsuarioId",
                        column: x => x.ClienteServicioUsuarioId,
                        principalTable: "Usuarios",
                        principalColumn: "UsuarioId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_venta_cliente_servicio_venta_cliente_ClienteServicioClienteId",
                        column: x => x.ClienteServicioClienteId,
                        principalTable: "venta_cliente",
                        principalColumn: "ClienteId");
                    table.ForeignKey(
                        name: "FK_venta_cliente_servicio_venta_servicio_ClienteServicioServicioId",
                        column: x => x.ClienteServicioServicioId,
                        principalTable: "venta_servicio",
                        principalColumn: "ServicioId");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Recuperaciones_RecuperacionUsuarioId",
                table: "Recuperaciones",
                column: "RecuperacionUsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_venta_cliente_ClienteUsuarioId",
                table: "venta_cliente",
                column: "ClienteUsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_venta_cliente_servicio_ClienteServicioClienteId",
                table: "venta_cliente_servicio",
                column: "ClienteServicioClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_venta_cliente_servicio_ClienteServicioServicioId",
                table: "venta_cliente_servicio",
                column: "ClienteServicioServicioId");

            migrationBuilder.CreateIndex(
                name: "IX_venta_cliente_servicio_ClienteServicioUsuarioId",
                table: "venta_cliente_servicio",
                column: "ClienteServicioUsuarioId");

            migrationBuilder.CreateIndex(
                name: "IX_venta_servicio_ServicioUsuarioId",
                table: "venta_servicio",
                column: "ServicioUsuarioId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Recuperaciones");

            migrationBuilder.DropTable(
                name: "venta_cliente_servicio");

            migrationBuilder.DropTable(
                name: "venta_cliente");

            migrationBuilder.DropTable(
                name: "venta_servicio");

            migrationBuilder.DropTable(
                name: "Usuarios");
        }
    }
}
