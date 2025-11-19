FROM python:3.10-bookworm

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set a custom token for Jupyter Notebook
ENV JUPYTER_TOKEN="default-jupyter-token"

RUN pip install pipenv

WORKDIR /app
# 先複製依賴檔以便 Docker cache
COPY ./requirements.txt .

# 安裝依賴
RUN pip install --no-cache-dir -r requirements.txt

# 複製應用程式碼
COPY . .

EXPOSE 8000

# CMD ["jupyter", "notebook", "--ip=0.0.0.0", "--port=8888", "--no-browser", \
#     "--allow-root", "--IdentityProvider.token=$JUPYTER_TOKEN"]
CMD ["gunicorn", "--bind=0.0.0.0:8000", "app:app"]