# -*- coding: utf-8 -*-
# Generated by Django 1.9.4 on 2016-04-26 18:46
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0005_remove_employee_project'),
        ('project', '0004_auto_20160426_0621'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='sponsors',
            field=models.ManyToManyField(to='account.Employee'),
        ),
    ]