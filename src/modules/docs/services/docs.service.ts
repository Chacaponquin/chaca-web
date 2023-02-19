export function useDocsService() {
  const createSubSectionUrl = (section: string, subSection: string): string => {
    const url = `/api/${section}/${subSection}`
    return url
  }

  return { createSubSectionUrl }
}
