/**
 * Injects the variables in the provided string
 * @param description string where to inject variables
 * @param variables set of variables and values to inject
 * @return string
 */
export function translate(description: string, variables: Record<string, string>) {
	const regex = /\${(.*?)}/g
	const replacedString = description.replace(regex, (match, key) => {
		return variables[key] !== undefined ? variables[key] : match
	})

	return replacedString
}
