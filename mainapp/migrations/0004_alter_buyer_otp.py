# Generated by Django 4.2 on 2023-09-12 06:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0003_buyer_username'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='otp',
            field=models.IntegerField(),
        ),
    ]