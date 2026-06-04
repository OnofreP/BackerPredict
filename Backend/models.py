from sqlalchemy import Column, Integer, String, DateTime, Date, Boolean, DECIMAL
from database import Base

class Usuario(Base):
    __tablename__ = "usuarios"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False)
    password_hash = Column(String(255), nullable=False)
    rol = Column(String(50), nullable=False)
    fecha_creacion = Column(DateTime)

class Venta(Base):
    __tablename__ = "ventas"

    id = Column(Integer, primary_key=True, index=True)
    fecha = Column(Date, unique=True, nullable=False)
    pan_sal_vendido = Column(Integer)
    pan_dulce_vendido = Column(Integer)
    ingreso_total = Column(DECIMAL(10, 2))
    fecha_registro = Column(DateTime)

class ProduccionDiaria(Base):
    __tablename__ = "produccion_diaria"

    id = Column(Integer, primary_key=True, index=True)
    fecha = Column(Date, unique=True, nullable=False)
    pan_sal_producido = Column(Integer)
    pan_dulce_producido = Column(Integer)
    pan_sal_vendido = Column(Integer)
    pan_dulce_vendido = Column(Integer)
    pan_sal_sobrante = Column(Integer)
    pan_dulce_sobrante = Column(Integer)
    fecha_registro = Column(DateTime)

class ClimaHistorico(Base):
    __tablename__ = "clima_historico"

    id = Column(Integer, primary_key=True, index=True)
    fecha = Column(Date, unique=True, nullable=False)
    temperatura = Column(DECIMAL(5, 2))
    humedad = Column(Integer)
    lluvia = Column(Boolean)
    descripcion = Column(String(100))
    fecha_registro = Column(DateTime)