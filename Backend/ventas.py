from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from datetime import date

from database import get_db
from models import Venta
from schemas import VentaCreate, VentaResponse

router = APIRouter(
    prefix="/ventas",
    tags=["Ventas"]
)

pan_precio = 10.00