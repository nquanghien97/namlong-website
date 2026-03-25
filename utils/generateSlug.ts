export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")                        // tách dấu khỏi chữ
    .replace(/[\u0300-\u036f]/g, "")         // xoá dấu
    .replace(/đ/g, "d")                      // xử lý chữ đ (sau normalize vẫn còn)
    .replace(/[^a-z0-9\s-]/g, "")           // xoá ký tự đặc biệt
    .trim()
    .replace(/\s+/g, "-")                    // khoảng trắng → dấu gạch ngang
    .replace(/-+/g, "-");                    // nhiều dấu gạch liên tiếp → 1
}