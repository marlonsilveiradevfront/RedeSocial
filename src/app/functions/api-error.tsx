
export default function apiError(erro: unknown): {
  data: null;
  ok: false;
  error: string;
} {
  if (erro instanceof Error) {
    return { data: null, ok: false, error: erro.message };
  } else {
    return { data: null, ok: false, error: "Erro genérico" };
  }
}
