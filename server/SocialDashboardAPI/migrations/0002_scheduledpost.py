# Generated by Django 5.0.2 on 2024-02-22 23:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SocialDashboardAPI', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ScheduledPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField()),
                ('description', models.TextField()),
            ],
        ),
    ]