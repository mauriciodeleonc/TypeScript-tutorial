import { MatchReader } from "./MatchReader";
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summaryHTML = Summary.winsAnalysisWithHtmlReport('Man United');
summaryHTML.buildAndPrintReport(matchReader.matches);

const summaryConsole = Summary.winsAnalysisWithConsoleReport('Man United');
summaryConsole.buildAndPrintReport(matchReader.matches);