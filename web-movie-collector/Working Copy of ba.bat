@echo off
call mvn clean install wro4j:run -e -DskipTests=true -Dhttp.proxyHost=proxy -Dhttp.proxyPort=8080
pause "All Done. Press a key to close this window."
SET TARGET_DIR="d:\jde\software\servers\apache-tomcat-7.0.32\webapps\wmc\"
rem deleting target
for /d %%a in (%TARGET_DIR%*) do rd /s %%a