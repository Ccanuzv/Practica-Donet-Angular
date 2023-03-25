using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class ProcedimientoAlmacenado : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
                    CREATE PROCEDURE dbo.ServicioDeBaja
                    @id nvarchar(max)
                    AS
                    BEGIN
                    SET NOCOUNT ON;
                    UPDATE venta_servicio
                    SET ServicioEstado = 0
                    WHERE ServicioId = @id;
                    UPDATE venta_cliente_servicio
                    SET ClienteServicioEstado = 0
                    WHERE ClienteServicioServicioId = @id;
                    END
                    ");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP PROCEDURE dbo.ServicioDeBaja");
        }
    }
}
