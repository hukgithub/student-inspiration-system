from rest_framework.permissions import BasePermission

class IsStudent(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'STUDENT'

class IsPrincipal(BasePermission):
    def has_permission(self, request, view):
        return request.user.role == 'PRINCIPAL'

# Repeat for TEACHER, PARENT, SPONSOR
