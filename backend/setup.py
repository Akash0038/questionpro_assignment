from setuptools import setup, find_packages

setup(
    name="backend",
    version="0.1.0",
    description="QuestionPro Assignment Backend",
    author="Akash Karyakarte",
    url="https://github.com/Akash0038/QuestionProBackend",
    packages=find_packages(),
    install_requires=[
        "fastapi==0.89.1",
        "uvicorn==0.20.0",
        "redis==4.4.2",
    ],
)
