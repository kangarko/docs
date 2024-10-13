FROM squidfunk/mkdocs-material
RUN pip install mkdocs-autorefs
RUN pip install mkdocs-glightbox
RUN pip install mkdocstrings-python
RUN pip install mkdocs-git-revision-date-localized-plugin
RUN pip install mkdocs-pdf