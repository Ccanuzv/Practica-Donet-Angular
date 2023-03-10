// <auto-generated />
using System;
using Backend.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Backend.Migrations
{
    [DbContext(typeof(PracticaDB))]
    [Migration("20230211052922_modelo-recuperacion1")]
    partial class modelorecuperacion1
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Backend.Modelo.Entity.Empleado", b =>
                {
                    b.Property<string>("EmpleadoId")
                        .HasColumnType("text");

                    b.Property<float>("EmpleadoBonoDecreto")
                        .HasColumnType("real");

                    b.Property<int>("EmpleadoCantidadHijos")
                        .HasColumnType("integer");

                    b.Property<string>("EmpleadoDPI")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("EmpleadoFechaCreacion")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("EmpleadoNombre")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<float>("EmpleadoSalario")
                        .HasColumnType("real");

                    b.Property<string>("EmpleadoUsuarioId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("EmpleadoId");

                    b.HasIndex("EmpleadoUsuarioId");

                    b.ToTable("Empleados");
                });

            modelBuilder.Entity("Backend.Modelo.Entity.RecuperacionContrasenia", b =>
                {
                    b.Property<string>("RecuperacionId")
                        .HasColumnType("text");

                    b.Property<bool>("RecuperacionEstado")
                        .HasColumnType("boolean");

                    b.Property<DateTime>("RecuperacionFechaCreacion")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("RecuperacionUsuarioId")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("RecuperacionId");

                    b.HasIndex("RecuperacionUsuarioId");

                    b.ToTable("Recuperaciones");
                });

            modelBuilder.Entity("Backend.Modelo.Entity.Usuario", b =>
                {
                    b.Property<string>("UsuarioId")
                        .HasColumnType("text");

                    b.Property<string>("UsuarioEmail")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("UsuarioFechaNacimiento")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("UsuarioNombre")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("UsuarioPass")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("UsuarioId");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("Backend.Modelo.Entity.Empleado", b =>
                {
                    b.HasOne("Backend.Modelo.Entity.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("EmpleadoUsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("Backend.Modelo.Entity.RecuperacionContrasenia", b =>
                {
                    b.HasOne("Backend.Modelo.Entity.Usuario", "Usuario")
                        .WithMany()
                        .HasForeignKey("RecuperacionUsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Usuario");
                });
#pragma warning restore 612, 618
        }
    }
}
