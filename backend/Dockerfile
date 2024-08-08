# Use the official Python image
FROM python:3.12.5

# Set the working directory
WORKDIR /app

# Copy requirements file and install dependencies
COPY backend/requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy the rest of the application code
COPY backend /app

# Expose the port on which the app will run
EXPOSE 5000

# Command to run the application
CMD ["python", "app.py"]
