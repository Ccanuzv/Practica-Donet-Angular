using Backend.Modelo.Entity;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data
{
    public class PracticaDB: DbContext
    {

        public PracticaDB(DbContextOptions<PracticaDB> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //modelBuilder.Entity<Hame_Venta_Cliente_Servicio>()
            //    .HasOne(x => x.cliente)
            //    .WithMany(x => x.cliente_servicios)
            //    .OnDelete(DeleteBehavior.Restrict)
            //    .IsRequired(false)
            //    .HasForeignKey(x => x.ClienteServicioClienteId);
            //modelBuilder.Entity<Hame_Venta_Cliente_Servicio>()
            //    .HasOne(x => x.servicio)
            //    .WithMany(x => x.servicio_clientes)
            //    .OnDelete(DeleteBehavior.Restrict)
            //    .IsRequired(false)
            //    .HasForeignKey(x => x.ClienteServicioServicioId);

            //modelBuilder.Entity<Hame_Venta_Servicio>()
            //    .HasMany(c => c.servicio_clientes)
            //    .WithOne(t => t.servicio)
            //    .HasForeignKey(t => t.ClienteServicioServicioId)
            //    .OnDelete(DeleteBehavior.Restrict);

            //modelBuilder.Entity<Hame_Venta_Cliente>()
            //    .HasMany(c => c.cliente_servicios)
            //    .WithOne(t => t.cliente)
            //    .HasForeignKey(t => t.ClienteServicioClienteId)
            //    .OnDelete(DeleteBehavior.Restrict);


        }

        public DbSet<Usuario> Usuarios => Set<Usuario>();
        //public DbSet<Empleado> Empleados => Set<Empleado>();
        public DbSet<RecuperacionContrasenia> Recuperaciones => Set<RecuperacionContrasenia>();
        public DbSet<Hame_Venta_Cliente> venta_cliente => Set<Hame_Venta_Cliente>();
        public DbSet<Hame_Venta_Servicio> venta_servicio => Set<Hame_Venta_Servicio>();
        public DbSet<Hame_Venta_Cliente_Servicio> venta_cliente_servicio => Set<Hame_Venta_Cliente_Servicio>();

    }
}
