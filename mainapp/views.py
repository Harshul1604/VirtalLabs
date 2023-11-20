from django.shortcuts import render,redirect,HttpResponseRedirect
from .models import *
from django.db.models import Q
from django.contrib.auth import authenticate,login,logout
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required
from random import randrange
from django.conf import settings
from django.core.mail import send_mail

def home(Request):
    return render(Request,"index.html")

def team(Request):
    return render(Request,"team.html")

def message(Request):
    return render(Request,"message.html")    

def development(Request):
    return render(Request,"development.html")

def outreach(Request):
    return render(Request,"outreach.html")

@login_required(login_url="/login1/")
def statistic(Request):
    return render(Request,"statistic.html")

@login_required(login_url="/login/")
def course2(Request):
    return render(Request,"course2.html")

def courses(Request):
    return render(Request,"courses.html")

def contact(Request):
    return render(Request,"contact.html")

def news(Request):
    return render(Request,"news.html")

# @login_required(login_url="/login/")    
def gallery(Request):
    return render(Request,"gallery.html")


def about(Request):
    return render(Request,"about.html")

def Login(Request):
    if(Request.method=='POST'):
        username= Request.POST.get("username") 
        password= Request.POST.get("password")
        user = authenticate(username=username,password=password)
        # user = Request.session.get('user')
        if(user is not None):
            login(Request, user)
            # Request.session['username'] = username
            # login(Request)
            if(user.is_superuser):
                return HttpResponseRedirect("/admin")
            else:
                print('Your name is : ' , Request.session.get('username'))
                return HttpResponseRedirect("/course2/")
                
        else:
            messages.error(Request,"Invalid Username or Password!!!")
    return render(Request,"login.html")

def Login1(Request):
    if(Request.method=='POST'):
        username= Request.POST.get("username") 
        password= Request.POST.get("password")
        user = authenticate(username=username,password=password)
        # user = Request.session.get('user')
        if(user is not None):
            login(Request, user)
            # Request.session['username'] = username
            # login(Request)
            if(user.is_superuser):
                return HttpResponseRedirect("/admin")
            else:
                print('Your name is : ' , Request.session.get('username'))
                return HttpResponseRedirect("/statistic/")
                
        else:
            messages.error(Request,"Invalid Username or Password!!!")
    return render(Request,"login1.html")

def signup(Request):
    if(Request.method=="POST"):
        # name=Request.POST.get("name")
        username=Request.POST.get("username")
        email=Request.POST.get("email")
        # phone=Request.POST.get("phone")
        password=Request.POST.get("password")
        cpassword=Request.POST.get("cpassword")
        if(password==cpassword):
            try:
                user = User(username=username)
                user.set_password(password)
                user.email=email
                user.save()
                subject = 'Account Created : Team Virtual Labs'
                message =   "Welcome Your Acc has been created\nTeam Virtual Labs"
                email_from = settings.EMAIL_HOST_USER
                recipient_list = [user.email, ]
                send_mail(subject, message, email_from, recipient_list)
                Request.session['resetuser']=username
                return HttpResponseRedirect("/login")
            except:
                messages.error(Request,"User Name Already Exist!!!")     
        else:
            messages.error(Request,"Password Doesn't match!!!!!")
    return render(Request,"signup.html") 

def signup1(Request):
    if(Request.method=="POST"):
        # name=Request.POST.get("name")
        username=Request.POST.get("username")
        email=Request.POST.get("email")
        # phone=Request.POST.get("phone")
        password=Request.POST.get("password")
        cpassword=Request.POST.get("cpassword")
        if(password==cpassword):
            try:
                user = User(username=username)
                user.set_password(password)
                user.email=email
                user.save()
                subject = 'Account Created : Team Virtual Labs'
                message =   "Welcome Your Acc has been created\nTeam Virtual Labs"
                email_from = settings.EMAIL_HOST_USER
                recipient_list = [user.email, ]
                send_mail(subject, message, email_from, recipient_list)
                Request.session['resetuser']=username
                return HttpResponseRedirect("/login1")
            except:
                messages.error(Request,"User Name Already Exist!!!")     
        else:
            messages.error(Request,"Password Doesn't match!!!!!")
    return render(Request,"signup1.html")  


def logoutpage(Request):
    logout(Request)
    return HttpResponseRedirect("/login/") 

def forgetUsername(Request):
    if(Request.method=="POST"):
        username = Request.POST.get("username")
        try:
            user = User.objects.get(username=username)
            if(user.is_superuser):
                return redirect("/admin")
            else:
                buyer = User.objects.get(username=username)
                otp = randrange(100000,999999)
                buyer.otp = otp 
                buyer.save()
                subject = 'OTP for Password Reset : Team Stylehut'
                message =   "OTP for Password Reset is "+str(otp)+"\nTeam StyleHut"
                email_from = settings.EMAIL_HOST_USER
                recipient_list = [buyer.email, ]
                send_mail( subject, message, email_from, recipient_list )
                Request.session['resetuser']=username
                return redirect("/forget-otp")
        except:
           messages.error(Request,"Invalid Username!!!!")
    return render(Request,"forget-username.html")



def forgetOTP(Request):
    if(Request.method=="POST"):
        otp = Request.POST.get('otp')
        username = Request.session.get('resetuser',None)
        if(username):
            buyer = User.objects.get(username=username)
            if(int(otp)==buyer.otp):
                return redirect("/forget-password")
            else:
                messages.error(Request,"Invalid OTP!!!!")    
        else:
            messages.error(Request,"UnAuthorized!!!!")
    return render(Request,"forget-otp.html")
def forgetPassword(Request):
    if(Request.method=="POST"):
        password = Request.POST.get('password')
        cpassword = Request.POST.get('cpassword')
        username = Request.session.get('resetuser',None)
        if(username):
            if(password==cpassword):
                user = User.objects.get(username=username)
                user.set_password(password)
                user.save()
                return redirect("/login")
            else:
                messages.error(Request,"Password and Confirm Password Doesn't Matched!!!!")
        else:
            messages.error(Request,"UnAuthorized!!!!")
    return render(Request,"forget-password.html")

     