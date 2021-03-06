# -*- coding: utf-8 -*-
# Generated by Django 1.9.1 on 2016-01-16 01:58
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('providers', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='providers',
            old_name='discos',
            new_name='disco',
        ),
        migrations.AddField(
            model_name='providers',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=datetime.datetime(2016, 1, 16, 1, 58, 51, 970000, tzinfo=utc)),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='providers',
            name='provider',
            field=models.CharField(max_length=40),
        ),
        migrations.AlterField(
            model_name='providers',
            name='providerName',
            field=models.CharField(max_length=40),
        ),
    ]
