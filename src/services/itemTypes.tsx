export const iText = (label: string, alignment?: string | null | undefined) => ({
  label: { text: label },
  cssClass: `ns-formitem-${alignment || 'left'}`,
});

export const iSelect = (
  label: string,
  items: any[] = [],
  value: any | null = null,
  displayExpr?: string | null | undefined,
  valueExpr?: any,
  alignment?: string | null | undefined,
  options: any = {},
) => ({
  label: { text: label },
  editorType: 'dxSelectBox',
  editorOptions: { items, searchEnabled: true, value, ...options },
  cssClass: `ns-formitem-${alignment || 'left'}`,
});

export const iInteger = (label: string, alignment?: string | null | undefined, options: any = {}) => ({
  label: { text: label },
  editorType: 'dxNumberBox',
  editorOptions: { step: 0, format: '#,##0', ...options },
  cssClass: `ns-formitem--${alignment || 'right'}`,
});

export const iDecimal = (label: string, alignment?: string | null | undefined, options: any = {}) => ({
  label: { text: label },
  editorType: 'dxNumberBox',
  editorOptions: { step: 0, format: '#,##0.00', ...options },
  cssClass: `ns-formitem--${alignment || 'right'}`,
});

export const iDate = (label: string, options: any = {}) => ({
  lable: { text: label },
  editorType: 'dxDateBox',
  editorOptions: { displayFormat: 'dd/MM/yyyy', useMaskBehavior: true, ...options },
  cssClass: 'ns-formitem-center',
});

export const iButton = (
  text: string,
  type?: string | null | undefined,
  stylingMode?: string | null | undefined,
  options: any = {},
) => ({
  buttonOptions: { text, width: '100%', type: type || 'default', stylingMode: stylingMode || 'outlined', ...options },
});
