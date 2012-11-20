@echo off
call mvn clean install wro4j:run -DskipTests=true
pause "All Done. Press a key to close this window."