# Generated by Django 5.0.2 on 2024-02-22 23:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SocialDashboardAPI', '0002_scheduledpost'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.TextField()),
                ('password', models.TextField()),
            ],
        ),
    ]