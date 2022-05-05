#npx cypress run --browser chrome --spec "cypress/integration/mytests/01_check_broken_links.spec.js" 
#npx cypress run --browser firefox --spec "cypress/integration/mytests/01_check_broken_links.spec.js" 
npx cypress run --browser chrome 
npx cypress run --browser firefox

#create new folder to store final report
mkdir -p execution-report

# merge all reports from repport folder and generate one json file
npx mochawesome-merge --reportDir mochawesome-report > execution-report/report.json

# generate .html file from it and save it as detailed-report-<current timestamp>
outfile="detailed-report-$(date  "+%d-%m-%Y-%R")"
npx marge execution-report/*.json -f $outfile -o execution-report --overwrite false

# open file in google chrome immeditely on merging
open -a "google chrome" "execution-report/$outfile.html"

# remove reports folder as it is not required anymore
rm -r -f reports