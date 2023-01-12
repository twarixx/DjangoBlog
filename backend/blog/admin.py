from django.contrib import admin
from .models import Post


class BlogAdmin(admin.ModelAdmin):
    list_display = ('title', 'content', 'date_posted')


admin.site.register(Post, BlogAdmin)
