from articles.models import Article
from .serializers import ArticleSerializer
from rest_framework import viewsets 

class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()