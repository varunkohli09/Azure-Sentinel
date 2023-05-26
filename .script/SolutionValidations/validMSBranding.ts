import { InvalidFileContentError } from "./../utils/validationError";
import { ExitCode } from "../utils/exitCode";
import fs from "fs";

export function IsValidBrandingContent(filePath: string): ExitCode {
    const errors: string[] = [];

    // check if the file is mainTemplate.json or createUiDefinition.json
    if (filePath.endsWith("mainTemplate.json") || filePath.endsWith("createUiDefinition.json")) {
        // read the content of the file
        let jsonFile = JSON.parse(fs.readFileSync(filePath, "utf8"));

        // check if the file content contains " Sentinel" without being preceded by "Microsoft" and not part of a hyphenated word
        const fileContent = JSON.stringify(jsonFile);
        const sentinelRegex = /(?<!Microsoft\s)(?<!-)\bSentinel\b/g;
        let match;
        while ((match = sentinelRegex.exec(fileContent))) {
            errors.push(`The string 'Sentinel' is invalid. It should be preceded by 'Microsoft' at index ${match.index}`);
        }

        // If the file is not identified correctly, log a warning message
    } else {
        console.warn(`Could not identify JSON file as mainTemplate.json or createUiDefinition.json. Skipping. File path: ${filePath}`);
    }

    // Throw a single error with all the error messages concatenated
    if (errors.length > 0) {
        throw new InvalidFileContentError(errors.join("\n"));
    }

    // Return success code after completion of the check
    return ExitCode.SUCCESS;
}
