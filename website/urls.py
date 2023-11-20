

from django.contrib import admin
from django.urls import path
from mainapp import views as mainapp

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',mainapp.home), 
    path('team/',mainapp.team),
    path('courses/',mainapp.courses),
    path('contact/',mainapp.contact),
    path('news/',mainapp.news),
    path('gallery/',mainapp.gallery),
    path('about/',mainapp.about),
    path('login/',mainapp.Login),
    path('signup/',mainapp.signup),
    path('logout/',mainapp.logoutpage),
    path('forget-username/',mainapp.forgetUsername),
    path('forget-otp/',mainapp.forgetOTP),
    path('forget-password/',mainapp.forgetPassword),
    path('course2/',mainapp.course2),
    path('development/',mainapp.development),
    path('outreach/',mainapp.outreach),
    path('statistic/',mainapp.statistic),
    path('login1/',mainapp.Login1), 
    path('signup1/',mainapp.signup1),
    path('message/',mainapp.message),

]
