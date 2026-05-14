from fastapi import APIRouter, Depends
from app.auth.dependencies import get_current_user
from app.services.profiles_services import create_or_load_profile_data

router = APIRouter()

@router.post("/me")
def create_or_load_profile(current_user = Depends(get_current_user)):
    profile = create_or_load_profile_data(current_user.id, current_user.email)
    return profile