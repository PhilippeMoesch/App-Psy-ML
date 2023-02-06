# Step 1: Use official lightweight Python image as base OS.
FROM python:3.9-slim

# Step 2. Copy local code to the container image.
# ENV APP_HOME /app
WORKDIR /app

COPY ./requirements.txt /app/requirements.txt

RUN apt-get update && \
    apt-get install -y --no-install-recommends apt-utils && \
    apt-get install libgomp1 curl libtk8.6 -y && \
    pip install --no-cache-dir --upgrade -r /app/requirements.txt

COPY ./app /app/app

# Step 3. Install production dependencies.
#RUN pip install -r requirements.txt

# Step 4: Run the web service on container startup using gunicorn webserver.
CMD exec gunicorn --bind :8080 --workers 1 --worker-class uvicorn.workers.UvicornWorker  --threads 8 app.main:app

